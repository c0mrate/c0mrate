<?php
$key = $_POST['key'];

$keyFilePath = 'key.json';

if (!file_exists($keyFilePath)) {
    $defaultKeyData = ['key' => ''];
    file_put_contents($keyFilePath, json_encode($defaultKeyData));
}

$keyData = json_decode(file_get_contents($keyFilePath), true);

if ($keyData['key'] === $key) {
    $response = ['success' => true];
} else {
    $response = ['success' => false];
}

echo json_encode($response);
?>
