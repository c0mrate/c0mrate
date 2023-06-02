<?php
$file = '/var/www/c0mrate/test.txt';
$content = "This is a test.";

// Write content to the file
file_put_contents($file, $content);

// Read the file and display its contents
$fileContent = file_get_contents($file);
echo $fileContent;
?>
