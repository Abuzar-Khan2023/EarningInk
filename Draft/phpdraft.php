<?php
$Name = $_POST['Name'];
$Email = $_POST['Email'];
$Message = $_POST['Message'];

if (empty($Name) || empty($Email) || empty($Message)) {
    echo "All fields are required";
    die();
}

if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $Name)) {
    echo "Invalid Name";
    die();
}

$conn = new mysqli('localhost','root','','test');
if ($conn->connect_error) {
    die('Connection Failed : '.$conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into contact(Name,Email,Message) values(?,?,?)");
    $stmt->bind_param("sss",$Name, $Email, $Message);
    $stmt->execute();
    echo "Contact Form Submitted Successfully";
    $stmt->close();
    $conn->close();
}
?>
