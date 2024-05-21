<?php
$servername = "localhost";
$username_db = "";
$password_db = "";
$dbname = "divison";

// Create connection
$conn = new mysqli($servername, $username_db, $password_db, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $phone = $_POST['phone'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE phone = ?");
    $stmt->bind_param("s", $phone);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "Phone number is already taken.";
    } else {
        echo "Phone number is available.";
    }

    $stmt->close();
}

$conn->close();
?>
