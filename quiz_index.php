<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="quiz_style.css">

</head>

<body>
    <form action="quiz_index.php" id="myform" method="POST">
        <?php

        if (isset($_POST['submit'])) {
            $score = $_POST['score'];
            $question_attempt = $_POST['question_attempt'];
            $local_email = $_POST['local_email'];
            $subject = $_POST['subject'];
            // $score= "8";
            // $question_attempt = "10";
            // $local_email = "rrrohan@example.com";
            require_once "database.php";
            $sql = "INSERT INTO quiz_details1(score,question_attempt,email,subject) VALUES (?,?,?,?)";
            $stmt = mysqli_stmt_init($conn);
            $stmt_prepare = mysqli_stmt_prepare($stmt, $sql);


            mysqli_stmt_bind_param($stmt, "ssss", $score, $question_attempt, $local_email,$subject);
            if (mysqli_stmt_execute($stmt)) {

                echo "<div class='err_text'>You logged in successfully" . $local_email."  ".$score."  ".$question_attempt." "."  $subject". "</div>";
                header("Location: Scoreboard.php");
            } else {
                echo mysqli_stmt_error($stmt);
            }
        }
        ?>
        
        <div class="app">
                <div class="input_div">
                <p>Name : </p><input type="text" id="fname" name="fname"></div><br>
                <div class="input_div">
                <p>Email : </p><input type="email" id="local_email" name="local_email"></div><br>
                <div class="input_div">
                <p>Quiz taken : </p><input type="text" id="subject" name="subject"></div><br>
                <div class="input_div">
                <p>No. of questions : </p><input type="text" id="question_attempt" name="question_attempt"></div><br>
                <div class="input_div">
                <p>Score : </p><input type="text" id="score" name="score"></div><br><br>
                <br>
                <div id="js-timer">
                    <div id="timer">
                        00:00
                    </div>
                    <!-- <button type="button"></button> -->
                </div>
            <h1 id="h1">Simple Quiz</h1>
            <div class="quiz">
                <h2 id="question">Question goes here</h2>

                
                <div id="answer-buttons">
                    <button type="button" class="btn">answer 1</button>
                    <button type="button" class="btn">answer 2</button>
                    <button type="button" class="btn">answer 3</button>
                    <button type="button" class="btn">answer 4</button>
                </div>
                

                <button type="button" id="next-btn">Next</button>

                
                <input type="submit" name="submit" id="submit" value="submit" style="display: block;">


            </div>


        </div>

        
    </form>

    <!-- <div class="app">
        <h1>Simple Quiz</h1>
        <div class="quiz">
            <h2 id="question">Question goes here</h2>
            <div id="answer-buttons">
                <button class="btn">answer 1</button>
                <button class="btn">answer 2</button>
                <button class="btn">answer 3</button>
                <button class="btn">answer 4</button>
            </div>
            
            <button id ="next-btn">Next</button>
        </div>

    </div> -->
    <script src="quiz_style.js">
        
       
    </script>
</body>

</html>