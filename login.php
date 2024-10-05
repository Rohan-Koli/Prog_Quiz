<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="#">
</head>

<body>
    <div class="container">
    <div id="user_id"></div>
        <?php

        if (isset($_POST['login']))
         {
            $email = $_POST['email'];
            $password = $_POST['password'];
            require_once "database.php";
            $sql = "SELECT * FROM pq_user1 WHERE email = ?";
            $stmt = mysqli_prepare($conn, $sql);
            
           mysqli_stmt_bind_param($stmt, "s", $email);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            $inserted_id = mysqli_insert_id($conn);
            $user = mysqli_fetch_array($result, MYSQLI_ASSOC);
            if ($user) {
                if (password_hash($password, PASSWORD_DEFAULT)) {

                                            
                    
                   
                    echo "<div class='alert alert-success' id='user_id'>".$user['pq_user']." ".$user['email']."".$user['password']."</div>";
                    echo"<script>";
                    echo"console.log('byeeeeeee');";
                    
                    echo"console.log(".$user['pq_user'].");";
                    
                    // echo"localStorage.setItem('id','');";
                    echo"localStorage.setItem('id',".json_encode($user['pq_user']).");";
                    echo"localStorage.setItem('email',".json_encode($user['email']).");";
                    echo"localStorage.setItem('name',".json_encode($user['first_name']).");";
                    echo"window.location.href = 'QuizFrame.html';";
                    
                    echo"</script>";
                    // header("Location: QuizFrame.html");
                    
                    exit();
                } else {
                    echo "<div class='alert alert-danger'> Password does not match</div>";
                }
            } else {
                echo "<div class='alert alert-danger'> Email does not match</div>";
            }
        }
    




        ?>
        <form action="login.php" method="POST">
            <div class="form-group">
                <h5>Enter email</h5>
                <input type="email" id="email" name="email" class="form-control">
            </div>
            <div class="form-group">
                <h5>Enter password</h5>
                <input type="password" name="password" class="form-control">
            </div>
            <div class="form-btn">
                <input type="submit" name="login" id="submit" value="Login" class="btn btn-primary">
            </div>
        </form>
    </div>

    <script>
        // document.addEventListener('DOMContentLoaded', function() {
        //     document.querySelector('form').addEventListener('submit', function(event) {
        //         event.preventDefault(); 

        //         var email = document.getElementById("email").value;
        //         console.log("Email:", email);
        //         console.log("hiiiiii");
                
                
                
        //         var user_id = document.getElementById("user_id");
        // if (user_id) {
        //     localStorage.setItem("id1", user_id.innerText);
        // }
                


        //         localStorage.setItem("email", email);

        //         window.location.href = "QuizFrame.html";
        //     });
        // });

//         document.addEventListener('DOMContentLoaded', function() {
//     var submit = document.getElementById("submit");
//     var form = document.querySelector('form');

//     submit.addEventListener("click", function(event) {
//         // Prevent the default form submission behavior
//         event.preventDefault();

//         var email = document.getElementById("email").value;
//         console.log("Email:", email);

//         localStorage.setItem("email", email);

//         var user_id = document.getElementById("user_id");
//         if (user_id) {
//             localStorage.setItem("id1", user_id.innerText);
//         }

//         // Redirect to QuizFrame.html
//         // window.location.href = "QuizFrame.html";
//     });

//     // Remove the submit event listener from the form
//     form.addEventListener('submit', function(event) {
//         // event.preventDefault();
//     });
// });

    </script>

</body>

</html>