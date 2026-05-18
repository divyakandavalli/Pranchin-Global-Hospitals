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
$sendTo = "careers@prachinglobalhospitals.com";
$subject = "New Job Application with Resume";

$okMessage = "Application submitted successfully!";
$errorMessage = "Something went wrong. Please try again.";

// ================== VALIDATION ==================
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode([
        "type" => "error",
        "message" => "Invalid request"
    ]);
    exit;
}

// ================== FORM FIELDS ==================
$name          = trim($_POST['name'] ?? '');
$surname       = trim($_POST['surname'] ?? '');
$email         = trim($_POST['email'] ?? '');
$phone         = trim($_POST['phone'] ?? '');
$qualification = trim($_POST['qualification'] ?? '');
$position      = trim($_POST['position'] ?? '');

// ================== VALIDATE REQUIRED FIELDS ==================
if (
    !$name ||
    !$surname ||
    !$email ||
    !$phone ||
    !$qualification ||
    !$position
) {
    echo json_encode([
        "type" => "error",
        "message" => "Required fields missing"
    ]);
    exit;
}

// Email validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "type" => "error",
        "message" => "Invalid email address"
    ]);
    exit;
}

// Phone validation
if (!preg_match('/^[0-9]{10}$/', $phone)) {
    echo json_encode([
        "type" => "error",
        "message" => "Phone number must be 10 digits"
    ]);
    exit;
}

// ================== FILE HANDLING ==================
$file = $_FILES['resume'] ?? null;

if ($file && $file['error'] === 0) {

    $allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!in_array($file['type'], $allowedTypes)) {
        echo json_encode([
            "type" => "error",
            "message" => "Only PDF/DOC/DOCX files allowed"
        ]);
        exit;
    }

    // Max 5MB
    if ($file['size'] > 5 * 1024 * 1024) {
        echo json_encode([
            "type" => "error",
            "message" => "File too large (max 5MB)"
        ]);
        exit;
    }

    $fileContent = chunk_split(
        base64_encode(
            file_get_contents($file['tmp_name'])
        )
    );

    $fileName = $file['name'];
    $fileType = $file['type'];

} else {

    echo json_encode([
        "type" => "error",
        "message" => "Resume/CV is required"
    ]);

    exit;
}

// ================== EMAIL BODY ==================
$boundary = md5(time());

$headers = "From: $name <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

// ================== TEXT PART ==================
$body = "--$boundary\r\n";
$body .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";

$body .= "New Job Application\n";
$body .= "=========================\n\n";

$body .= "Name: $name\n";
$body .= "Surname: $surname\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Qualification: $qualification\n";
$body .= "Position Looking For: $position\n\n";

// ================== ATTACHMENT ==================
$body .= "--$boundary\r\n";
$body .= "Content-Type: $fileType; name=\"$fileName\"\r\n";
$body .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n";
$body .= "Content-Transfer-Encoding: base64\r\n\r\n";

$body .= $fileContent . "\r\n";
$body .= "--$boundary--";

// ================== SEND EMAIL ==================
if (mail($sendTo, $subject, $body, $headers)) {

    echo json_encode([
        "type" => "success",
        "message" => $okMessage
    ]);

} else {

    echo json_encode([
        "type" => "error",
        "message" => $errorMessage
    ]);
}
?>