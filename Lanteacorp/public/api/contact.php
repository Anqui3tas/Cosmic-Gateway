<?php
header('Content-Type: application/json');
$ip = $_SERVER['REMOTE_ADDR'];
$storage = __DIR__ . '/contact_rate_limit.json';
$limit = 5;
$window = 3600; // 1 hour
$data = file_exists($storage) ? json_decode(file_get_contents($storage), true) : [];
if (!is_array($data)) { $data = []; }

if (isset($data[$ip]) && $data[$ip]['time'] > time() - $window && $data[$ip]['count'] >= $limit) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Too many requests']);
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');
$honeypot = trim($_POST['website'] ?? ''); // honeypot field

if ($honeypot !== '') {
    http_response_code(400);
    echo json_encode(['ok' => false]);
    exit;
}
if (!$name || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$message) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid input']);
    exit;
}

$to = 'contact@lanteacorp.com'; // TODO: replace
$subject = 'Contact Form';
$body = "Name: $name\nEmail: $email\n\n$message";
$headers = "From: $email";
$sent = @mail($to, $subject, $body, $headers);

$data[$ip] = ['time' => time(), 'count' => ($data[$ip]['count'] ?? 0) + 1];
file_put_contents($storage, json_encode($data));

echo json_encode(['ok' => (bool)$sent]);