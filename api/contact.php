<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid input']);
    exit;
}

$firstName = $input['firstName'] ?? '';
$lastName = $input['lastName'] ?? '';
$email = $input['email'] ?? '';
$phone = $input['phone'] ?? '';
$company = $input['company'] ?? '';
$message = $input['message'] ?? '';

if (empty($firstName) || empty($email) || empty($phone)) {
    echo json_encode(['status' => 'error', 'message' => 'Required fields missing']);
    exit;
}

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'YOUR_GMAIL_ADDRESS'; // USER TODO: Replace with your Gmail
    $mail->Password   = 'YOUR_GMAIL_APP_PASSWORD'; // USER TODO: Replace with your App Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Recipients
    $mail->setFrom('YOUR_GMAIL_ADDRESS', 'WebAnatomy Contact Form');
    $mail->addAddress('info@webanatomy.in'); // Destination email

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body    = "
        <h3>New Contact Enquiry</h3>
        <p><strong>Name:</strong> $firstName $lastName</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Company:</strong> $company</p>
        <p><strong>Message:</strong><br>$message</p>
    ";

    $mail->send();
    echo json_encode(['status' => 'success', 'message' => 'Message sent successfully']);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
}
?>
