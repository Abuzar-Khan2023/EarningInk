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
    if (isset($_POST['full_name']) && isset($_POST['username']) && isset($_POST['email_address']) && isset($_POST['password']) && isset($_POST['Cpassword'])) {
        // Get form data
        $full_name = $_POST['full_name'];
        $username = $_POST['username'];
        $email_address = $_POST['email_address'];
        $password = $_POST['password'];
        $Cpassword = $_POST['Cpassword'];

        // Perform validation, like checking if passwords match
        if ($password !== $Cpassword) {
            die("Passwords do not match.");
        }

        // Hash the password for security
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // SQL query to insert data into the registeration table
        $sql = $con->prepare("INSERT INTO registeration (full_name, username, email_address, password) VALUES (?, ?, ?, ?)");
        
        // Check if query preparation was successful
        if (!$sql) {
            die("Query preparation failed: " . $con->error);
        }

        $sql->bind_param("ssss", $full_name, $username, $email_address, $hashed_password);

        // Execute the query and check for errors
        if ($sql->execute()) {
            echo "Registration successful!";
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
