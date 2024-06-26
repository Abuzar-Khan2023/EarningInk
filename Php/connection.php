<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "earningink";

// Create connection
$con = new mysqli($servername, $username, $password, $database);

// Check connection
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

// Check if form is submitted using POST method
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Check if all required form data is set
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
        // Get form data
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        // Use prepared statements to prevent SQL injection
        $sql = $con->prepare("INSERT INTO Contact (name, email, message) VALUES (?, ?, ?)");
        $sql->bind_param("sss", $name, $email, $message);

        // Execute the query and check for errors
        if ($sql->execute()) {
            // Send a success response to JavaScript
            echo "success";
        } else {
            echo "Error: " . $sql->error;
        }

        $sql->close();
    } else {
        echo "All form fields are required.";
    }
} else {
    echo "Form not submitted correctly.";
}

$con->close();
?>
