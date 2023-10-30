<?php
require "./config/cors/cors.php";
require "./config/database/DatabaseConnector.php";

$data = json_decode(file_get_contents("php://input"), true);
print_r($data);
date_default_timezone_set('Europe/Istanbul');

$action = $_POST['action'];

switch ($action) {
    case "login":
        $email = $_POST['email'];
        $password = $_POST['password'];
        $query = "SELECT * FROM users WHERE email='$email' AND password='$password'";
        $result = mysqli_query($connection, $query);
        $user = mysqli_fetch_assoc($result);
        if ($user == null) {
            $user = array("error" => "Invalid email or password");
        }
        echo json_encode($user);
        break;
    case 'getTodos':
        $owner_user_id = $_POST['owner_user_id'];
        $query = "SELECT * FROM todos where owner_user_id = '$owner_user_id' order by id desc";
        $result = mysqli_query($connection, $query);
        $todos = mysqli_fetch_all($result, MYSQLI_ASSOC);
        echo json_encode($todos);
        break;
    case "addTodo":
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
        break;
    case "updateTodoStatus":
        $id = $_POST['id'];
        $done = $_POST['done'];
        $query = "UPDATE todos SET done='$done' WHERE id='$id'";
        $result = mysqli_query($connection, $query);
        if ($result) {
            echo json_encode(array("success" => "Todo status updated"));
        } else {
            echo json_encode(array("error" => "Error updating todo status"));
        }
        break;
}
