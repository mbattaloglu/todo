<?php

require "../config/config.php";

$owner_user_id = $_POST['owner_user_id'];
$query = "SELECT * FROM todos where owner_user_id = '$owner_user_id' order by id desc";
$result = mysqli_query($connection, $query);
$todos = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($todos);