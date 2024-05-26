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
    if (isset($_POST['username']) && isset($_POST['password'])) {
        // Get form data
        $input_username = $con->real_escape_string($_POST['username']);
        $input_password = $con->real_escape_string($_POST['password']);

        // SQL query to retrieve user data based on username
        $sql = $con->prepare("SELECT * FROM registeration WHERE username = ?");
        
        // Check if query preparation was successful
        if (!$sql) {
            die("Query preparation failed: " . $con->error);
        }

        $sql->bind_param("s", $input_username);
        $sql->execute();
        $result = $sql->get_result();

        if ($result->num_rows === 1) {
            $user = $result->fetch_assoc();

            // Verify password
            if (password_verify($input_password, $user['password'])) {
                // Store user data in session
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['username'] = $user['username'];
                // Redirect to dashboard
                header("Location: dashboard.php");
                exit;
            } else {
                echo "Invalid username or password.";
            }
        } else {
            echo "Invalid username or password.";
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
