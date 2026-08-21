<?php
/**
 * Contact form handler for narcoca.com
 *
 * Deployed to public_html/send.php (this file lives in frontend/public/, which
 * Next.js copies verbatim into out/ on every build).
 *
 * Settings live in mail-config.php, which you create ONCE on the server, one
 * level ABOVE public_html so it is never web-accessible and never overwritten
 * when you re-upload the site. See mail-config.example.php.
 */

header('Content-Type: application/json; charset=utf-8');

function fail($status, $message) {
    http_response_code($status);
    echo json_encode(['ok' => false, 'error' => $message]);
    exit;
}

function ok() {
    echo json_encode(['ok' => true]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    fail(405, 'Method not allowed');
}

// --- config -------------------------------------------------------------
$config = null;
foreach ([__DIR__ . '/../mail-config.php', __DIR__ . '/mail-config.php'] as $path) {
    if (is_readable($path)) { $config = require $path; break; }
}
if (!is_array($config) || empty($config['to']) || empty($config['from'])) {
    error_log('send.php: mail-config.php missing or incomplete');
    fail(500, 'Mail is not configured on the server.');
}

// --- input --------------------------------------------------------------
$data = [];
if (stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== false) {
    $data = json_decode(file_get_contents('php://input'), true) ?: [];
} else {
    $data = $_POST;
}
$field = function ($key) use ($data) {
    return trim((string) ($data[$key] ?? ''));
};

// Honeypot: real users never see this field, bots fill everything in.
if ($field('company_website') !== '') {
    ok();
}

$name    = $field('user_name');
$email   = $field('user_email');
$phone   = $field('user_phone');
$company = $field('company_name');
$subject = $field('subject');
$message = $field('message');

if ($name === '' || $email === '' || $message === '') {
    fail(422, 'Please fill in your name, email, and message.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail(422, 'That email address does not look valid.');
}
if (mb_strlen($message) > 5000) {
    fail(422, 'Message is too long.');
}

// Strip CR/LF so nothing can inject extra mail headers.
$clean = function ($value) {
    return str_replace(["\r", "\n", '%0a', '%0d'], ' ', $value);
};

// --- compose ------------------------------------------------------------
$mailSubject = 'Website enquiry: ' . ($subject !== '' ? $subject : 'General') . ' - ' . $name;
$ip          = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$timestamp   = date('j F Y') . ' at ' . date('H:i');
$firstName   = trim(explode(' ', $name)[0]) ?: $name;

// Plain-text alternative. Always sent alongside the HTML part: some clients
// prefer it, and having a text/plain part lowers spam scoring versus HTML only.
$body = "New enquiry from narcoca.com\n\n"
      . "Name:     " . $name . "\n"
      . "Email:    " . $email . "\n"
      . "Phone:    " . ($phone   !== '' ? $phone   : '-') . "\n"
      . "Company:  " . ($company !== '' ? $company : '-') . "\n"
      . "Service:  " . ($subject !== '' ? $subject : '-') . "\n\n"
      . "Message:\n" . $message . "\n\n"
      . "-- \nSubmitted " . $timestamp . " from IP " . $ip . "\n";

// Branded HTML part matching the site design. Values are HTML-escaped before
// substitution, so a submission can never inject markup into the email.
$html = '';
foreach ([__DIR__ . '/email-template.php', __DIR__ . '/../email-template.php'] as $tpl) {
    if (is_readable($tpl)) { require $tpl; break; }
}
if (function_exists('narco_email_html')) {
    $esc = function ($value) {
        return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    };
    $html = strtr(narco_email_html(), [
        '{{NAME}}'       => $esc($name),
        '{{FIRST_NAME}}' => $esc($firstName),
        '{{EMAIL}}'      => $esc($email),
        '{{PHONE}}'      => $phone   !== '' ? $esc($phone)   : '&mdash;',
        '{{COMPANY}}'    => $company !== '' ? $esc($company) : '&mdash;',
        '{{SERVICE}}'    => $subject !== '' ? $esc($subject) : 'General enquiry',
        '{{MESSAGE}}'    => nl2br($esc($message)),
        '{{DATE}}'       => $esc($timestamp),
        '{{IP}}'         => $esc($ip),
    ]);
}

// --- send ---------------------------------------------------------------
$headers = [
    'MIME-Version: 1.0',
    'From: ' . $clean($config['from_name'] ?? 'NARCO Website') . ' <' . $clean($config['from']) . '>',
    'Reply-To: ' . $clean($name) . ' <' . $clean($email) . '>',
    'X-Mailer: PHP/' . phpversion(),
];

if ($html !== '') {
    // multipart/alternative: text part first, HTML second. Clients render the
    // last part they understand.
    $boundary  = 'narco-' . bin2hex(random_bytes(8));
    $headers[] = 'Content-Type: multipart/alternative; boundary="' . $boundary . '"';
    $payload = "--{$boundary}\r\n"
             . "Content-Type: text/plain; charset=utf-8\r\n"
             . "Content-Transfer-Encoding: 8bit\r\n\r\n"
             . $body . "\r\n"
             . "--{$boundary}\r\n"
             . "Content-Type: text/html; charset=utf-8\r\n"
             . "Content-Transfer-Encoding: 8bit\r\n\r\n"
             . $html . "\r\n"
             . "--{$boundary}--\r\n";
} else {
    $headers[] = 'Content-Type: text/plain; charset=utf-8';
    $payload   = $body;
}

$sent = mail(
    $clean($config['to']),
    $clean($mailSubject),
    $payload,
    implode("\r\n", $headers),
    '-f' . $clean($config['from'])      // envelope sender, so SPF matches
);

if (!$sent) {
    error_log('send.php: mail() returned false');
    fail(500, 'The server could not send the message.');
}

ok();
