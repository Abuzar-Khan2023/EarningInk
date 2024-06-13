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

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

// Fetch user details
$user_id = $_SESSION['user_id'];
$sql = $con->prepare("SELECT * FROM registration WHERE id = ?");
if (!$sql) {
    die("Prepare failed: " . $con->error);
}
$sql->bind_param("i", $user_id);
$sql->execute();
$result = $sql->get_result();
$user = $result->fetch_assoc();
$sql->close();

// Fetch user's blogs
$blogs_sql = $con->prepare("SELECT * FROM blog WHERE user_id = ? ORDER BY id DESC");
if (!$blogs_sql) {
    die("Prepare failed: " . $con->error);
}
$blogs_sql->bind_param("i", $user_id);
$blogs_sql->execute();
$blogs_result = $blogs_sql->get_result();
$blogs_sql->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EarningInk | Dashboard</title>
    <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap">
    <link rel="stylesheet" href="/EarningInk/CSS/DashboardStyle.css">
    <script src="https://cdn.tiny.cloud/1/q2p5qub7ucf5omv4noalz7yek6dlwm8hcf0ugrsq59ym76v8/tinymce/7/tinymce.min.js" referrerpolicy="origin"></script>
</head>

<body>
    <div class="wrapper">
        <nav class="sidebar close">
            <div class="menu-bar">
                <li class="search-box">
                    <i class='bx bx-search icon'></i>
                    <input type="text" placeholder="Search...">
                </li>
                <ul class="menu-links">
                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-home-alt icon'></i>
                            <span class="text nav-text">Dashboard</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-bar-chart-alt-2 icon'></i>
                            <span class="text nav-text">Revenue</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-bell icon'></i>
                            <span class="text nav-text">Notifications</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-pie-chart-alt icon'></i>
                            <span class="text nav-text">Analytics</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-heart icon'></i>
                            <span class="text nav-text">Likes</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-wallet icon'></i>
                            <span class="text nav-text">Wallets</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="logout.php">
                            <i class='bx bx-log-out icon'></i>
                            <span class="text nav-text">Logout</span>
                        </a>
                    </li>
                </ul>
                <div class="bottom-content">
                    <li class="mode">
                        <div class="sun-moon">
                            <i class='bx bx-moon icon moon'></i>
                            <i class='bx bx-sun icon sun'></i>
                        </div>
                        <span class="mode-text text">Dark mode</span>
                        <div class="toggle-switch">
                            <span class="switch"></span>
                        </div>
                    </li>
                </div>
            </div>
        </nav>
        <main>
            <header>
                <h1>Dashboard</h1>
                <i class='bx bx-chevron-right toggle-sidebar'></i>
            </header>
            <div class="container">
                <div class="card">
                    <h2>Your Details</h2>
                    <p>Full Name: <?php echo htmlspecialchars($user['full_name']); ?></p>
                    <p>Email: <?php echo htmlspecialchars($user['email'] ?? ''); ?></p>
                </div>
                <div class="card">
                    <h2>Upload a Blog</h2>
                    <form action="upload_blog.php" method="POST">
                        <label for="title">Title:</label>
                        <input type="text" id="title" name="title" required>
                        <label for="content">Content:</label>
                        <textarea id="content" name="content" rows="10" cols="30" required></textarea>
                        <button type="submit">Upload Blog</button>
                    </form>
                </div>

                <div class="card">
                    <h2>Your Blogs</h2>
                    <?php while ($blog = $blogs_result->fetch_assoc()): ?>
                        <div class="blog-post">
                            <h3><?php echo htmlspecialchars($blog['title']); ?></h3>
                            <p><?php echo nl2br(htmlspecialchars($blog['content'])); ?></p>
                        </div>
                    <?php endwhile; ?>
                </div>
            </div>
        </main>
    </div>
    <script src="/EarningInk/Js/dashboard.js"></script>

    <script>
    tinymce.init({
        selector: 'textarea#content',
        menubar: false,
        plugins: 'link image lists',
        toolbar: 'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image'
    });
</script>

</body>
</html>

<?php
$con->close();
?>
