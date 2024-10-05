<?php
$hostName ="localhost";
$dbUser= "root";
$password = "";
$dbName = "progquiz";
$conn = mysqli_connect($hostName,$dbUser,$password,$dbName);

if(!$conn)
{
    die("error");
    echo"error occured";
}

$sql = "INSERT INTO quiz_details1(score,question_attempt,email) VALUES (?,?,?)";
$stmt = mysqli_stmt_init($conn);
$stmt_prepare = mysqli_stmt_prepare($stmt,$sql);
    $score= "2";
    $question_attempt = "10";
    $email = "mohan@example.com";
    

    mysqli_stmt_bind_param($stmt, "sss", $score, $question_attempt, $email);
  if(mysqli_stmt_execute($stmt)){
  echo"<div class='err_text'>You logged in successfully</div>";

}
else{
  die("seomething went wrong");
  

}

?>