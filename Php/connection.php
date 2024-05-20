<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "test";
$con = mysqli_connect($servername, $username, $password, $database);


if (!$con) {
    die("error detected" . mysqli_connect($con));
} else {
    echo "connection established successfully";
}
?>
