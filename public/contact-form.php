<?php
// ====================== CONTACT FORM HANDLER ======================

// Allow from any origin (CORS)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

// ================== CONFIGURATION ==================
$sendTo   = 'info@prachinglobalhospitals.com';           // Change this to your email
$subject  = 'New Appointment Request - Prachin Global Hospitals';

// Success and Error Messages
$okMessage    = 'Thank you! Your details have been submitted successfully. We will contact you soon.';
$errorMessage = 'Sorry, something went wrong. Please try again later.';

// ================== FIELD MAPPING ==================
$fields = [
    'fullName'   => 'Full Name',
    'email'      => 'Email',
    'phone'      => 'Phone Number',
    'department' => 'Department',
    'date'       => 'Preferred Date',
    'time'       => 'Preferred Time',
    'message'    => 'Message'
];

error_reporting(E_ALL & ~E_NOTICE);

try {
    // Only accept POST with JSON
    if ($_SERVER['REQUEST_METHOD'] !== 'POST' || strpos($_SERVER['CONTENT_TYPE'], 'application/json') === false) {
        throw new Exception('Invalid request method or content type');
    }

    // Get JSON data from React
    $data = json_decode(file_get_contents('php://input'), true);

    if (empty($data)) {
        throw new Exception('Form data is empty');
    }

    // Validate required fields
    if (empty($data['fullName']) || empty($data['email']) || empty($data['phone'])) {
        throw new Exception('Full Name, Email and Phone are required');
    }

    // Build email body
    $emailText = "New Contact / Appointment Request from Website\n";
    $emailText .= "================================================\n\n";

    foreach ($fields as $key => $label) {
        if (isset($data[$key]) && !empty($data[$key])) {
            $emailText .= "$label: " . $data[$key] . "\n";
        }
    }

    $emailText .= "\nSubmitted on: " . date('d-m-Y H:i:s') . "\n";
    $emailText .= "Source: Prachin Global Hospitals Website";

    // Email Headers
    $from = $data['fullName'] . " <" . $data['email'] . ">";
    $headers = [
        'Content-Type: text/plain; charset=UTF-8',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from
    ];

    // Send email
    if (mail($sendTo, $subject, $emailText, implode("\r\n", $headers))) {
        $response = [
            'type'    => 'success',
            'message' => $okMessage
        ];
    } else {
        throw new Exception('Failed to send email');
    }

} catch (Exception $e) {
    $response = [
        'type'    => 'danger',
        'message' => $errorMessage . ' (' . $e->getMessage() . ')'
    ];
}

// Return JSON response for React (AJAX)
header('Content-Type: application/json');
echo json_encode($response);
?>