<?php

if (isset($_POST['submit'])) {
    $score = $_POST['score'];
    $question_attempt = $_POST['question_attempt'];
    $local_email = $_POST['local_email'];
    echo"hiiiiiiii";
    require_once "database.php";
    $sql = "INSERT INTO quiz_details1(score,question_attempt,email) VALUES (?,?,?)";
            $stmt = mysqli_stmt_init($conn);
            $stmt_prepare = mysqli_stmt_prepare($stmt, $sql);
            if ($stmt_prepare) {
                // mysqli_stmt_bind_param($stmt, "sss", $score, $question_attempt, $$local_email);
                // mysqli_stmt_execute($stmt);
                echo "<div class='err_text'>You logged in successfully".$local_email."</div>";
            }
}
?>