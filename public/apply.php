<?php
// ====================== CORS ======================
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ================== CONFIG ==================
$sendTo = "careers@prachinhospitals.com";
$subject = "New Job Application with Resume";

$okMessage = "Application submitted successfully!";
$errorMessage = "Something went wrong. Please try again.";

// ================== VALIDATION ==================
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["type" => "error", "message" => "Invalid request"]);
    exit;
}

// Form fields
$name     = $_POST['fullName'] ?? '';
$email    = $_POST['email'] ?? '';
$phone    = $_POST['phone'] ?? '';
$position = $_POST['position'] ?? '';
$message  = $_POST['message'] ?? '';

// Validate
if (!$name || !$email || !$phone) {
    echo json_encode(["type" => "error", "message" => "Required fields missing"]);
    exit;
}

// ================== FILE HANDLING ==================
$file = $_FILES['resume'] ?? null;

if ($file && $file['error'] === 0) {

    $allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];

    if (!in_array($file['type'], $allowedTypes)) {
        echo json_encode(["type" => "error", "message" => "Only PDF/JPG/PNG allowed"]);
        exit;
    }

    if ($file['size'] > 5 * 1024 * 1024) {
        echo json_encode(["type" => "error", "message" => "File too large (max 5MB)"]);
        exit;
    }

    $fileContent = chunk_split(base64_encode(file_get_contents($file['tmp_name'])));
    $fileName = $file['name'];
    $fileType = $file['type'];
} else {
    echo json_encode(["type" => "error", "message" => "Resume is required"]);
    exit;
}

// ================== EMAIL BODY ==================
$boundary = md5(time());

$headers = "From: $name <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

// Text part
$body = "--$boundary\r\n";
$body .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";

$body .= "New Job Application\n";
$body .= "=====================\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Position: $position\n";
$body .= "Message: $message\n\n";

// Attachment
$body .= "--$boundary\r\n";
$body .= "Content-Type: $fileType; name=\"$fileName\"\r\n";
$body .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n";
$body .= "Content-Transfer-Encoding: base64\r\n\r\n";
$body .= $fileContent . "\r\n";
$body .= "--$boundary--";

// ================== SEND MAIL ==================
if (mail($sendTo, $subject, $body, $headers)) {
    echo json_encode(["type" => "success", "message" => $okMessage]);
} else {
    echo json_encode(["type" => "error", "message" => $errorMessage]);
}
?>