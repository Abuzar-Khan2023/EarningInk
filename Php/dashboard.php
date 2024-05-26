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

// Fetch user details
$user_id = $_SESSION['user_id'];
$sql = $con->prepare("SELECT * FROM registeration WHERE id = ?");
$sql->bind_param("i", $user_id);
$sql->execute();
$result = $sql->get_result();
$user = $result->fetch_assoc();
$sql->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>EarningInk | Dashboard</title>
    <link rel="stylesheet" href="/EarningInk/CSS/DashboardStyle.css">
</head>
<body>
    <header>
        <h1>Welcome, <?php echo htmlspecialchars($user['username']); ?>!</h1>
    </header>
    <div class="container">
        <h2>Your Details</h2>
        <p>Full Name: <?php echo htmlspecialchars($user['full_name']); ?></p>
        <p>Email: <?php echo htmlspecialchars($user['email_address']); ?></p>

        <h2>Upload a Blog</h2>
        <form action="upload_blog.php" method="POST">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required>
            <label for="content">Content:</label>
            <textarea id="content" name="content" rows="10" cols="30" required></textarea>
            <button type="submit">Upload Blog</button>
        </form>
    </div>
</body>
</html>

<?php
$con->close();
?>
