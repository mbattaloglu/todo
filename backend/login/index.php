<?php

require "../config/config.php";

$email = $_POST['email'];
$password = $_POST['password'];
$query = "SELECT * FROM users WHERE email='$email' AND password='$password'";
$result = mysqli_query($connection, $query);
$user = mysqli_fetch_assoc($result);
if ($user == null) {
    $user = array("error" => "Invalid email or password");
}
echo json_encode($user);