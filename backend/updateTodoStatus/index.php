<?php

require "../config/config.php";

$id = $_POST['id'];
$done = $_POST['done'];
$query = "UPDATE todos SET done=$done WHERE id=$id";
$result = mysqli_query($connection, $query);
if ($result) {
    echo json_encode(array("success" => "Todo status updated", "id" => $id, "done" => $done));
} else {
    echo json_encode(array("error" => "Error updating todo status"));
}