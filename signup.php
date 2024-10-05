<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body style="background-image: 'progquiz.png'">
    <div class="container">
        <h1>Sign in in ProgQuiz</h1>
        <form action="signup.php" method="POST">
            <?php
            if (isset($_POST['submit'])) {
                $first_name = ($_POST['first_name']);
                $last_name = ($_POST['last_name']);
                $email = ($_POST['email']);
                $password = ($_POST['password']);
                $password_repeat = ($_POST['password_repeat']);
                $password_hash = password_hash($password, PASSWORD_DEFAULT);
                $errors = array();
                if (empty($first_name) or empty($last_name) or empty($email) or empty($password) or empty($password)) {
                    array_push($errors, "All fields are required");
                }
                if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                    array_push($errors, "Email is not valid");
                }
                if (strlen($password) < 8) {
                    array_push($errors, "Password mudt be 8 characters long");
                }
                if ($password !== $password_repeat) {
                    array_push($errors, "password is not same");
                }
                require_once "database.php";
                $sql = "SELECT * FROM pq_user1 WHERE email = '$email'";
                $result = mysqli_query($conn, $sql);
                $rowCount = mysqli_num_rows(($result));
                if ($rowCount > 0) {
                    array_push($errors, "Email already exists");
                }
                if (count($errors) > 0) {
                    foreach ($errors as $error) {
                        echo "<div class='err-text'>$error<div><br>";
                    }
                } else {

                    $sql = "INSERT INTO pq_user1(first_name, last_name,email,password) VALUES (?,?,?,?)";
                    $stmt = mysqli_stmt_init($conn);
                    $stmt_prepare = mysqli_stmt_prepare($stmt, $sql);
                    if ($stmt_prepare) {
                        mysqli_stmt_bind_param($stmt, "ssss", $first_name, $last_name, $email, $password_hash);
                        mysqli_stmt_execute($stmt);
                        echo "<div class='err_text'>You logged in successfully</div>";
                        header("Location: MainFrame.php");
                    exit();
                    } else {
                        die("seomething went wrong");
                    }
                    // $sql = "INSERT INTO pq_user1(first_name, last_name,email,password) VALUES (?,?,?,?)";
                    // $stmt = mysqli_stmt_init($conn); 
                    // $stmt_prepare = mysqli_stmt_prepare($stmt, $sql);
                    // if ($stmt_prepare) {


                    //   mysqli_stmt_bind_param($stmt, "ssss", $first_name, $last_name, $email, $password);
                    //   mysqli_stmt_execute($stmt);
                    //   echo "<div class='err_text'>You logged in successfully</div>";
                    // } else {
                    //   die("seomething went wrong");
                    // }
                }
            }
            ?>
            <div class="form-group">
                <h5>Enter first name</h5>
                <input type="text" name="first_name" class="form-control">
            </div>
            <div class="form-group">
                <h5>Enter last name</h5>
                <input type="text" name="last_name" class="form-control">
            </div>
            <div class="form-group">
                <h5>Enter email</h5>
                <input type="email" name="email" id="email" class="form-control">
            </div>
            <div class="form-group">
                <h5>Enter password</h5>
                <input type="password" name="password" class="form-control">
            </div>
            <div class="form-group">
                <h5>Enter password again</h5>
                <input type="password" name="password_repeat" class="form-control">
            </div>
            <div class="form-btn">
                <input type="submit" id="submit" name="submit" value="Login" class="btn btn-primary">
            </div>
        </form>
    </div>
   <script>
     document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('form').addEventListener('submit', function(event) {
            // event.preventDefault(); 

            var email = document.getElementById("email").value;
            var first_name = document.getElementById("first_name").value;
            
            console.log("Email:", email); 
            localStorage.setItem("email","")
            localStorage.setItem("email",email);
            localStorage.setItem("name",first_name);


            
            // window.location.href = "QuizFrame.html";
        });
    });
   </script>
</body>

</html>