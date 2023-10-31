<?php

require "../config/config.php";

$id = $_POST['id'];
$query = "DELETE FROM todos where id = '$id'";
$result = mysqli_query($connection, $query);
if ($result) {
    $result = [
        "success" => true,
        "message" => "Todo deleted successfully"
    ];
} else {
    $result = [
        "success" => false,
        "message" => "Todo not deleted"
    ];
}
echo json_encode($result);
?>