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

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    fail(405, 'Method not allowed');
}

// --- config -------------------------------------------------------------
$configPaths = [
    __DIR__ . '/../mail-config.php',   // preferred: above the web root
    __DIR__ . '/mail-config.php',      // fallback: alongside this file
];
$config = null;
foreach ($configPaths as $path) {
    if (is_readable($path)) { $config = require $path; break; }
}
if (!is_array($config) || empty($config['to']) || empty($config['from'])) {
    error_log('send.php: mail-config.php missing or incomplete');
    fail(500, 'Mail is not configured on the server.');
}

// --- input --------------------------------------------------------------
$raw = file_get_contents('php://input');
$data = [];
if (stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== false) {
    $data = json_decode($raw, true) ?: [];
} else {
    $data = $_POST;
}

$field = function ($key) use ($data) {
    return trim((string) ($data[$key] ?? ''));
};

// Honeypot: real users never see this field, bots fill everything.
if ($field('company_website') !== '') {
    echo json_encode(['ok' => true]);   // silently accept, send nothing
    exit;
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
    return str_replace(["\r", "\n", "%0a", "%0d"], ' ', $value);
};

// --- compose ------------------------------------------------------------
$mailSubject = 'Website enquiry: ' . ($subject !== '' ? $subject : 'General') . ' - ' . $name;

$body = "New enquiry from narcoca.com\n\n"
      . "Name:     " . $name . "\n"
      . "Email:    " . $email . "\n"
      . "Phone:    " . ($phone   !== '' ? $phone   : '-') . "\n"
      . "Company:  " . ($company !== '' ? $company : '-') . "\n"
      . "Service:  " . ($subject !== '' ? $subject : '-') . "\n\n"
      . "Message:\n" . $message . "\n\n"
      . "-- \nSubmitted " . date('Y-m-d H:i:s') . " from IP " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";

$headers = [
    'From: ' . $clean($config['from_name'] ?? 'NARCO Website') . ' <' . $clean($config['from']) . '>',
    'Reply-To: ' . $clean($name) . ' <' . $clean($email) . '>',
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=utf-8',
];

$sent = mail(
    $clean($config['to']),
    $clean($mailSubject),
    $body,
    implode("\r\n", $headers),
    '-f' . $clean($config['from'])      // envelope sender, so SPF matches
);

if (!$sent) {
    error_log('send.php: mail() returned false');
    fail(500, 'The server could not send the message.');
}

echo json_encode(['ok' => true]);
