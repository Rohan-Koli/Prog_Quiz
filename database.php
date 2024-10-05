<?php
$hostName ="localhost:3307";
$dbUser= "root";
$password = "";
$dbName = "progquiz";
$conn = mysqli_connect($hostName,$dbUser,$password,$dbName);

if(!$conn)
{
    die("error");
    echo"error occured";
}



?>