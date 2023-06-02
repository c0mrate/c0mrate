<?php
$key = $_POST['key'];
$target = $_POST['target'];

// Read key.json file
$keyData = file_get_contents('key.json');
$keyArray = json_decode($keyData, true);

// Read target.json file
$targetData = file_get_contents('target.json');
$targetArray = json_decode($targetData, true);

// Check if the key is valid
if (isset($keyArray[$key])) {
    // Update target value in target.json file
    $targetArray['target'] = $target;
    file_put_contents('target.json', json_encode($targetArray));

    echo "success";
} else {
    echo "error";
}
?>
