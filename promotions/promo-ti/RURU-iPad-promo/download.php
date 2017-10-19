<?php 
$file_name = "vaucher.jpg";
header('Content-Disposition: attachment; filename="'.$file_name.'"');
header("Content-Type: application/force-download");
header("Content-Type: application/octet-stream");
header("Content-Type: application/download");
header("Content-Description: File Transfer");
$handle=fopen($file_name, "rb");
$contents = fread($handle, filesize($file_name)); 
echo $contents; 
fclose($handle); 
?>