<?php
session_start();

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

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
    if (isset($_POST['title']) && isset($_POST['content'])) {
        // Get form data
        $title = $con->real_escape_string($_POST['title']);
        $content = $con->real_escape_string($_POST['content']);
        $user_id = $_SESSION['user_id'];

        // SQL query to insert data into the blogs table
        $sql = $con->prepare("INSERT INTO blogs (user_id, title, content) VALUES (?, ?, ?)");
        
        // Check if query preparation was successful
        if (!$sql) {
            die("Query preparation failed: " . $con->error);
        }

        $sql->bind_param("iss", $user_id, $title, $content);

        // Execute the query and check for errors
        if ($sql->execute()) {
            echo "Blog uploaded successfully!";
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
