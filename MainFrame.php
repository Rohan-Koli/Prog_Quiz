<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="initial-scale=1, width=device-width" />

  <link rel="stylesheet" href="./global.css" />
  <link rel="stylesheet" href="./MainFrame.css" />
  <link rel="stylesheet" href="./LoginForm.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Judson:wght@400&display=swap" />

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="main-frame">

    <section class="component-81">
      <div class="home6"></div>
      <div class="component-45">
        <img class="component-4-child7" alt="" src="./public/rectangle-2.svg" />

        <div class="cq5">PQ</div>
        <div class="home7">Home</div>
        <div class="quizes5" id="quizesText">Quizes</div>
        <div class="about-us5">About us</div>
        <div class="scoreboard5">Scoreboard</div>
        <div class="component-25">
          <div class="component-2-child3"></div>
          <div class="log-in12">Log in</div>
        </div>
        <div class="component-35">
          <div class="component-3-child3"></div>
          <div class="sign-up5">Sign up</div>
        </div>
        <div class="component-4-child8"></div>
        <div class="prog-quiz6">Prog Quiz</div>
        <div class="pq8">PQ</div>
        <div class="div"></div>
      </div>
    </section>
    <div class="discover-your-performance-container">
      <p class="discover-your-performance">Discover Your Performance</p>
      <p class="assess-your-score">
        <span> </span>
        <span class="assess-your-score1">Access Your Score!</span>
      </p>
    </div>
    <div class="welcome-to-progquiz-container">
      <p class="welcome-to">
        <span>welcome to</span>
        <span class="span"> </span>
      </p>
      <p class="progquiz">ProgQuiz</p>
      <p class="test-your-coding">test your coding knowlodge....</p>
    </div>
    <div class="component-112">
      <div class="component-46">
        <img class="component-4-child9" alt="" src="./public/rectangle-2-2.svg" />

        <div class="c-q-text">
          <div class="cq6">PQ</div>
          <div class="empty-frame">
            <div class="div1"></div>
          </div>
        </div>
        <div class="about-frame">
          <div class="home8">Home</div>
        </div>
        <div class="quizes-label">
          <div class="quizes6" id="quizesText1">Quizes</div>
        </div>
        <div class="aboutus-label">
          <div class="scoreboard6" id="scoreboardText1">Scoreboard</div>
        </div>
        <div class="component-26">
          <div class="component-2-child4"></div>
          <div class="log-in13">Log in</div>
        </div>
        <div class="component-36">
          <div class="component-3-child4"></div>
          <div class="sign-up6">Sign up</div>
        </div>
        <div class="component-4-child10"></div>
        <div class="prog-quiz7">Prog Quiz</div>
        <div class="pq9">PQ</div>
        <div class="about-us-wrapper">
          <div class="about-us6" id="aboutUsText1">About us</div>
        </div>
      </div>

      <div class="component-101">
        <div class="component-54">
          <div class="login-button" id="login-button">
          <div class="log-in14">Log in</div></div>
        </div>
      </div>
      <div class="component-142" id="component14Container">
        <div class="quizzes-frame" id="quizzes-frame">
          <div class="log-in15">Sign up</div>
        </div>
      </div>
    </div>
    <img class="welcome-1-icon" loading="lazy" alt="" src="./public/welcome-1@2x.png" />

    <div class="explore-an-array-container">
      <p class="explore-an-array">Explore an array of</p>
      <div id = "p_text">
      <p class="captivating-coding-technologie">
        captivating coding technolo
      </p></div>
    </div>
    <img class="coding-1-icon" loading="lazy" alt="" src="./public/coding-1@2x.png" />

    <img class="leadboard-1-icon" loading="lazy" alt="" src="./public/leadboard-1@2x.png" />





    <div id="login">
      <div id="container">
      <form action="MainFrame.php" method="post">
        <div class="login-form">
          <section class="first-name-frame">
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
              $result = mysqli_query($conn,$sql);
              $rowCount = mysqli_num_rows(($result));
              if($rowCount>0)
              {
                array_push($errors, "Email already exists");
              }
              if (count($errors) > 0) {
                foreach ($errors as $error) {
                  echo "<div class='err-text'>$error<div><br>";
                }
              } else {
                
                $sql = "INSERT INTO pq_user1(first_name, last_name,email,password_hash ) VALUES (?,?,?,?)";
                $stmt = mysqli_stmt_init($conn);
                $stmt_prepare = mysqli_stmt_prepare($stmt, $sql);
                if ($stmt_prepare) {
                  mysqli_stmt_bind_param($stmt, "ssss", $first_name, $last_name, $email, $password_hash);
                  mysqli_stmt_execute($stmt);
                  echo "<div class='err_text'>You logged in successfully</div>";
                } else {
                  die("seomething went wrong");
                }
                $sql = "INSERT INTO pq_user1(first_name, last_name,email,password) VALUES (?,?,?,?)";
                $stmt = mysqli_stmt_init($conn); 
                $stmt_prepare = mysqli_stmt_prepare($stmt, $sql);
                if ($stmt_prepare) {
                  

                  mysqli_stmt_bind_param($stmt, "ssss", $first_name, $last_name, $email, $password);
                  mysqli_stmt_execute($stmt);
                  echo "<div class='err_text'>You logged in successfully</div>";
                } else {
                  die("seomething went wrong");
                }
              }
            }
            ?>
            <img class="first-name-frame-child" alt="" src="./public/rectangle-19.svg" />

            <div class="first-name">First Name</div>
            <input class="email-rectangle" type="text" />

            <div class="passward">Passward</div>
            <div class="email">Email</div>
            <div class="last-name">Last Name</div>
          </section>
          <section class="sign-in-label">
            <div class="component-18-parent">
              <div class="component-18" id="component-18">
                <img class="component-18-child" loading="lazy" alt="" />

                <div class="x">x</div>
              </div>
              <div class="second-passward-frame">
                <div class="sign-in">Sign in</div>
              </div>
            </div>
            <div class="space-frame-wrapper">
              <input class="space-frame" type="text" name="first_name" />
            </div>
          </section>
          <div class="layout-frame">
            <input class="error-message-frame" type="text" name="last_name" />
          </div>
          <section class="spacer-frames">
            <div class="column-layout">
              <input class="input-field-pair" type="text" name="email" />

              <input class="input-field-pair1" type="password" name="password" />
            </div>
          </section>
          <section class="passward-again-label">
            <div class="log-in-instance">
              <div class="password-input">
                <input class="passward-again" type="password" name="password_repeat">
              </div>
              <div class="sign-in-button">
                <div class="component-57">
                  <div class="component-5-item"></div>
                  <div class="log-in23">Log in</div>
                </div>
                <div class="second-input-field">
                  <div class="component-13">
                    <div class="email-input">
                      <input class="email-input" type="submit" name="submit">
                    </div>
                    <!-- <div class="log-in24">Sign up</div> -->
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>
      </form>
          </div>
    </div>


  </div>

  <script>
    var quizesText = document.getElementById("quizesText");
    if (quizesText) {
      quizesText.addEventListener("click", function(e) {
        window.location.href = "./MainFrame.php";
      });
    }

    var quizesText1 = document.getElementById("quizesText1");
    if (quizesText1) {
      quizesText1.addEventListener("click", function(e) {
        window.location.href = "./QuizFrame.html";
      });
    }

    var scoreboardText1 = document.getElementById("scoreboardText1");
    if (scoreboardText1) {
      scoreboardText1.addEventListener("click", function(e) {
        window.location.href = "./Scoreboard.php";
      });
    }

    var aboutUsText1 = document.getElementById("aboutUsText1");
    if (aboutUsText1) {
      aboutUsText1.addEventListener("click", function(e) {
        window.location.href = "./Aboutus.html";
      });
    }

    var login_button = document.getElementById("login-button");
    if (login_button) {
      login_button.addEventListener("click", function(e) {
        window.location.href = "./login.php";
      });
    }

    // var component14Container = document.getElementById("component14Container");
    // if (component14Container) {
    //   component14Container.addEventListener("click", function () {
    //     var popup = document.getElementById("loginFormPopup");
    //     if (!popup) return;
    //     var popupStyle = popup.style;
    //     if (popupStyle) {
    //       popupStyle.display = "flex";
    //       popupStyle.zIndex = 100;
    //       popupStyle.backgroundColor = "rgba(113, 113, 113, 0.3)";
    //       popupStyle.alignItems = "center";
    //       popupStyle.justifyContent = "center";
    //     }
    //     popup.setAttribute("closable", "");

    //     var onClick =
    //       popup.onClick ||
    //       function (e) {
    //         if (e.target === popup && popup.hasAttribute("closable")) {
    //           popupStyle.display = "none";
    //         }
    //       };
    //     popup.addEventListener("click", onClick);
    //   });
    // }
    // const sign_in = document.getElementById("quizzes-frame");
    // const login_form1 = document.getElementById("login-form1");


    // sign_in.addEventListener("click", function () {
    //   if (login_form1.display == "none") {
    //     login_form1.display = "flex";
    //     login_form1.zIndex = 100000000000;
    //     login_form1.backgroundColor = "rgba(113, 113, 113, 0.3)";
    //     login_form1.alignItems = "center";
    //     login_form1.justifyContent = "center";
    //     console.log("display flex");

    //   } else {
    //     login_form1.display = "none"; // hide the form if already displayed
    //     console.log("display none");
    //   }

    // });
    const sign_in = document.getElementById("quizzes-frame");
    const login = document.getElementById("login");
    const component_18 = document.getElementById("component-18");

    sign_in.addEventListener("click", function() {
      // if (login.style.display === "none" || login.style.display === "") {
      //   login.style.display = "flex";

      //   console.log("display flex");
      // }
      window.location.href="./signup.php";

    });
    component_18.addEventListener("click", function() {
      if (login.style.display == "flex") {
        login.style.display = "none";
        console.log("component_18")
      }
    });
  </script>
</body>

</html>