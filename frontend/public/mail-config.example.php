<?php
/**
 * Copy this to mail-config.php and place it ONE LEVEL ABOVE public_html
 * (e.g. /home/uXXXXXXXX/mail-config.php) so it is not web-accessible and is
 * not overwritten when you re-upload the site.
 */
return [
    // Where enquiries are delivered. Any mailbox on the domain.
    'to' => 'shujarehman@narcoca.com',

    // Must be a REAL mailbox on narcoca.com, or messages will fail SPF/DKIM
    // and land in spam. Create something like website@narcoca.com in hPanel.
    'from'      => 'website@narcoca.com',
    'from_name' => 'NARCO Website',
];
