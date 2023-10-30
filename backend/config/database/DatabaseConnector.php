<?php
//Connection to Database
$connection = mysqli_connect("localhost", "mustafa", "12345", "todo");
mysqli_set_charset($connection, "utf8mb4");

if (!$connection) {
    echo "Connection Error" . mysqli_connect_error($connection);
}