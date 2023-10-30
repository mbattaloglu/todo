<?php

require "../config/config.php";

$owner_user_id = $_POST['owner_user_id'];
$title = $_POST['title'];
$description = $_POST['description'];
$done = $_POST['done'];
$query = "INSERT INTO todos (owner_user_id, title, description, done) VALUES ('$owner_user_id', '$title', '$description', '$done')";
$result = mysqli_query($connection, $query);
if ($result) {
    $todo = array(
        "id" => mysqli_insert_id($connection),
        "owner_user_id" => $owner_user_id,
        "title" => $title,
        "description" => $description,
        "done" => $done,
        "created_at" => date('Y-m-d H:i:s')
    );
    echo json_encode($todo);
} else {
    echo json_encode(array("error" => "Error adding todo"));
}