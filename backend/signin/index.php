<?php

require "../config/config.php";
$user = array();

$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$password = $_POST['password'];
$query = "INSERT INTO users (name, surname, email, password) VALUES ('$name', '$surname', '$email', '$password')";
$result = mysqli_query($connection, $query);

if ($result) {
    $last_id = mysqli_insert_id($connection);
    $user = array("success" => "User added", "id" => $last_id);
} else {
    $user = array("error" => "Error adding user");
}
echo json_encode($user);