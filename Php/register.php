<?php
session_start();

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
        $full_name = $con->real_escape_string($_POST['full_name']);
        $username = $con->real_escape_string($_POST['username']);
        $email = $con->real_escape_string($_POST['email_address']);
        $password = $con->real_escape_string($_POST['password']);
        $Cpassword = $con->real_escape_string($_POST['Cpassword']);

        // Perform validation, like checking if passwords match
        if ($password !== $Cpassword) {
            echo "Passwords do not match.";
            $con->close();
            exit();
        }

        // Check if username or email already exists
        $check_query = $con->prepare("SELECT id FROM registration WHERE username = ? OR email = ?");
        if (!$check_query) {
            echo "Query preparation failed: " . $con->error;
            $con->close();
            exit();
        }
        $check_query->bind_param("ss", $username, $email);
        $check_query->execute();
        $check_query->store_result();
        
        if ($check_query->num_rows > 0) {
            echo "Username or email already exists.";
            $check_query->close();
            $con->close();
            exit();
        }
        $check_query->close();

        // Hash the password for security
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // SQL query to insert data into the registeration table
        $sql = $con->prepare("INSERT INTO registration (full_name, username, email, password) VALUES (?, ?, ?, ?)");
        if (!$sql) {
            echo "Query preparation failed: " . $con->error;
            $con->close();
            exit();
        }

        $sql->bind_param("ssss", $full_name, $username, $email, $hashed_password);

        // Execute the query and check for errors
        if ($sql->execute()) {
            echo "Registration Successful! Now you need to login Yourself. Thanks!";
        } else {
            echo "Error: " . $sql->error;
        }

        $sql->close();
        $con->close();
        exit();
    } else {
        echo "All form fields are required.";
        $con->close();
        exit();
    }
} else {
    echo "Form not submitted correctly.";
    $con->close();
    exit();
}
?>
