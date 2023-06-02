<?php
$target = $_POST['target'];

$targetFilePath = 'target.json';

if (!file_exists($targetFilePath)) {
    $defaultTargetData = ['data' => ''];
    file_put_contents($targetFilePath, json_encode($defaultTargetData));
}

$data = json_decode(file_get_contents($targetFilePath), true);
$data['data'] = $target;

file_put_contents($targetFilePath, json_encode($data));

$response = ['success' => true];
echo json_encode($response);
?>
