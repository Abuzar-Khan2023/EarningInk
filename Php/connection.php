<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "earningink";

// Create connection
$con = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$con) {
    die("Error detected: " . mysqli_connect_error());
} else {
    echo "Connection established successfully<br>";
}

$name = "Abuzar Khan";
$email = "abc123@gmail.com";
$message = "This is a test message";

// SQL query to insert data into the contactform table
$sql = "INSERT INTO contactform (name, email, message) VALUES ('$name', '$email', '$message')";

// Execute the query and check for errors
if (mysqli_query($con, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($con);
}

// Close the connection
mysqli_close($con);
?>
