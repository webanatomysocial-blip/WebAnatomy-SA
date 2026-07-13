<?php
// Load .env variables manually (PHP doesn't auto-load .env)
$envFile = __DIR__ . '/.env';
if (file_exists($envFile)) {
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0)
            continue;
        if (strpos($line, '=') !== false) {
            [$key, $val] = explode('=', $line, 2);
            $_ENV[trim($key)] = trim($val, " \t\n\r\0\x0B\"'");
        }
    }
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Accept FormData (multipart) or JSON body
$input = $_POST;
if (empty($input)) {
    $json = json_decode(file_get_contents('php://input'), true);
    if ($json)
        $input = $json;
}

if (empty($input)) {
    $rawInput = file_get_contents('php://input');
    echo json_encode([
        "success" => false,
        "status" => "error",
        "message" => "No data provided. Request Method: " . $_SERVER['REQUEST_METHOD'] . ", Raw Input: " . $rawInput
    ]);
    exit();
}

$formType = htmlspecialchars(trim($input['formType'] ?? 'Website Form Submission'));
unset($input['formType']); // Remove from list of fields to loop through

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';

$smtpUser = $_ENV['SMTP_USER'] ?? '';
$smtpPass = $_ENV['SMTP_PASS'] ?? '';
$smtpFrom = 'info@webaxis.co.za';
$smtpFromNm = 'Web Axis';
$smtpPort = (int) ($_ENV['SMTP_PORT'] ?? 465);
$toEmails = [
    'webanatomysocial@gmail.com',
    'srujan@mosol9.com',
    'supraja@mosol.com',
];

$subject = "Web Axis Website Lead";

$htmlBody = "
<!DOCTYPE html>
<html>
<head><meta charset='UTF-8'></head>
<body style='font-family:Arial,sans-serif;color:#222;max-width:600px;margin:0 auto;padding:24px;'>
  <h2 style='color:#512594;border-bottom:2px solid #512594;padding-bottom:8px;'>
    {$formType}
  </h2>
  <table style='width:100%;border-collapse:collapse;margin-top:16px;'>";

$isOdd = true;
$replyToEmail = '';
$replyToName = 'User';

foreach ($input as $key => $value) {
    $safeKey = htmlspecialchars((string) $key);
    $safeValue = nl2br(htmlspecialchars((string) $value));

    // Guess email/name for Reply-To
    if (stripos($safeKey, 'email') !== false && filter_var($value, FILTER_VALIDATE_EMAIL)) {
        $replyToEmail = $value;
    }
    if (stripos($safeKey, 'name') !== false && empty($replyToName) || $replyToName === 'User') {
        $replyToName = $value;
    }

    $bg = $isOdd ? "background:#f7f3ff;" : "";
    $htmlBody .= "
    <tr style='{$bg}'>
      <td style='padding:10px 14px;font-weight:bold;width:160px;vertical-align:top;'>" . ucfirst(preg_replace('/(?<=[a-z])(?=[A-Z])/', ' ', $safeKey)) . "</td>
      <td style='padding:10px 14px;'>" . $safeValue . "</td>
    </tr>";
    $isOdd = !$isOdd;
}

$htmlBody .= "
  </table>
  <p style='margin-top:24px;font-size:12px;color:#888;'>Sent via Web Axis website.</p>
</body>
</html>";

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUser;
    $mail->Password = $smtpPass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = $smtpPort;
    $mail->CharSet = 'UTF-8';

    $mail->setFrom($smtpFrom, $smtpFromNm);
    foreach ($toEmails as $email) {
        $mail->addAddress($email);
    }
    if (!empty($replyToEmail)) {
        $mail->addReplyTo($replyToEmail, $replyToName);
    }

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $htmlBody;

    $mail->send();
    echo json_encode(["success" => true, "status" => "success", "ok" => true, "message" => "Email sent successfully."]);

} catch (\Exception $e) {
    // Fallback to PHP mail()
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: {$smtpFrom}\r\n";
    if (!empty($replyToEmail)) {
        $headers .= "Reply-To: {$replyToEmail}\r\n";
    }

    $toEmailString = implode(', ', $toEmails);
    if (mail($toEmailString, $subject, $htmlBody, $headers)) {
        echo json_encode(["success" => true, "status" => "success", "ok" => true, "message" => "Email sent via fallback."]);
    } else {
        echo json_encode(["success" => false, "status" => "error", "ok" => false, "message" => "Failed to send email: " . $e->getMessage()]);
    }
}
?>
