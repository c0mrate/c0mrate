<?php
$key = $_POST['key'];
$command = $_POST['command'];

// Read key.json file
$keyData = file_get_contents('key.json');
$keyArray = json_decode($keyData, true);

// Read command.json file
$commandData = file_get_contents('command.json');
$commandArray = json_decode($commandData, true);

// Check if the key is valid
if (isset($keyArray[$key])) {
    // Update command value in command.json file
    $commandArray['command'] = $command;
    file_put_contents('command.json', json_encode($commandArray));

    echo "success";
} else {
    echo "error";
}
?>
