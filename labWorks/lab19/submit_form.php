<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $errors = [];

    if (strlen($full_name) > 40) {
        $errors[] = "Full name must be up to 40 characters.";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email address.";
    }

    if (!preg_match("/^[A-Za-z]+\d+$/", $username)) {
        $errors[] = "Username must start with a string and be followed by a number.";
    }

    if (empty($errors)) {
