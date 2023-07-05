<?php

$name = $_POST['name'];
$name = $_POST['email'];
$name = $_POST['message'];



$to = "emmanueljoshua1472@gmail.com";

$subject = "Mail From Website";
$headers = "From: ".$name. "/r/n";

$txt ="You have recieve an email from ".$name."/r/nEmail:
 ".$email."/r/n Message: ".$message;    

 if($email!=NULL){
    mail($to. $subject, $txt, $headers);
 }

 header('Location:thank.html');

?>