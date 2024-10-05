<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />

    <link rel="stylesheet" href="./global.css" />
    <link rel="stylesheet" href="./Scoreboard.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Judson:wght@400&display=swap" />
    
</head>

<body>
    <div class="header-frame1">
        <section class="component-82">
            <div class="home11"></div>
            <div class="component-48">
                <img class="component-4-child13" alt="" src="./public/rectangle-2.svg" />

                <div class="cq8">PQ</div>
                <div class="home12">Home</div>
                <div class="quizes8" id="quizesText">Quizes</div>
                <div class="about-us8">About us</div>
                <div class="scoreboard8">Scoreboard</div>
                <div class="component-28">
                    <div class="component-2-child6"></div>
                    <div class="log-in19">Log in</div>
                </div>
                <div class="component-38">
                    <div class="component-3-child6"></div>
                    <div class="sign-up8">Sign up</div>
                </div>
                <div class="component-4-child14"></div>
                <div class="prog-quiz9">Prog Quiz</div>
                <div class="pq11">PQ</div>
                <div class="div2"></div>
            </div>
        </section>
        <div class="component-20">
            <div class="component-49">
                <img class="component-4-child15" alt="" src="./public/rectangle-2-2.svg" />

                <div class="cq-parent">
                    <div class="cq9">PQ</div>
                    <div class="c-q"></div>
                </div>
                <div class="component-29">
                    <div class="component-2-child7"></div>
                    <div class="log-in20">Log in</div>
                </div>
                <div class="component-39">
                    <div class="component-3-child7"></div>
                    <div class="sign-up9">Sign up</div>
                </div>
                <div class="component-4-child16"></div>
                <div class="prog-quiz10">Prog Quiz</div>
                <div class="pq12">PQ</div>
                <div class="frame-div">
                    <div class="home-text-parent">
                        <div class="home-text">
                            <div class="home13" id="homeText1">Home</div>
                        </div>
                        <div class="quizes-text1">
                            <div class="quizes9" id="quizesText1">Quizes</div>
                        </div>
                        <div class="aboutus-text">
                            <div class="scoreboard9">Scoreboard</div>
                        </div>
                        <div class="about-us9" id="aboutUsText1">About us</div>
                    </div>
                </div>
            </div>
            <!-- <div class="component-103">
                <div class="component-56">
                    <div class="log-in-button2"></div>
                    <div class="log-in21">Log in</div>
                </div>
            </div>
            <div class="component-144" id="component14Container">
                <div class="first-rectangle"></div>
                <div class="log-in22">Sign up</div>
            </div> -->
        </div>
    </div>

    <br><br><br>
    <form action="Scoreboard.php" method="POST">
    
<h1>
    <input type="text" id="name11" class="name11" name="name11"><br>
    <input type="email" id="email11" class="imp center" name="email11"><br>
    
    <input type="submit" name="submit" class="imp center" value="check score">
</h1>
    </form>

       
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        require_once "database.php";

        if (isset($_POST['submit'])) {
            // Fetch data from database

            $email_temp = $_POST['email11'];
            $name = $_POST['name11'];
            if ($email_temp) {
                // echo "<script> alert('visible')</script>";
            } else {
                echo "<script> alert('Email not visible')</script>";
            }
            $sql = "SELECT quiz_id1, score, question_attempt, email, subject FROM quiz_details1";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                // Output data in a table
                echo "<table class='imp table1'>";
                echo "<tr class='imp'><th  class='imp th1'>Quiz ID</th><th  class='imp th1'>user name</th> <th class='imp th1'>Score</th><th class='imp th1'>Question Attempt</th><th class='imp th1'>Email</th><th class='imp th1'>Subject</th></tr>";
                while ($row = $result->fetch_assoc()) {

                    if($email_temp == $row['email']){
                        
                    echo "<tr class='imp'><td class='imp td1'>" . $row["quiz_id1"] . "</td><td class='imp td1'>" . $name . "</td><td class='imp td1'>" . $row["score"] . "</td><td class='imp td1'>" . $row["question_attempt"] . "</td><td class='imp td1'>" . $row["email"] . "</td><td class='imp td1'>" . $row["subject"] . "</td></tr>";
                    }
                }
                echo "</table>";
            } else {
                echo "No records found";
            }
        }
    }
    ?>

    

    <script>
        document.getElementById("email11").value = localStorage.getItem("email");
        document.getElementById("name11").value = localStorage.getItem("name");
        
        var quizesText = document.getElementById("quizesText");
        if (quizesText) {
            quizesText.addEventListener("click", function(e) {
                window.location.href = "./Scoreboard.php";
            });
        }

        var homeText1 = document.getElementById("homeText1");
        if (homeText1) {
            homeText1.addEventListener("click", function(e) {
                console.log("MainFRame text clicked");
                window.location.href = "./MainFrame.php";
            });
        }

        var quizesText1 = document.getElementById("quizesText1");
        if (quizesText1) {
            quizesText1.addEventListener("click", function(e) {
                console.log("Quizes text clicked");
                window.location.href = "./QuizFrame.html";
            });
        }

        var aboutUsText1 = document.getElementById("aboutUsText1");
        if (aboutUsText1) {
            aboutUsText1.addEventListener("click", function(e) {
                console.log("About us clicked");
                window.location.href = "./Aboutus.html";
            });
        }

        var component14Container = document.getElementById("component14Container");
        if (component14Container) {
            component14Container.addEventListener("click", function() {
                var popup = document.getElementById("loginFormPopup");
                if (!popup) return;
                var popupStyle = popup.style;
                if (popupStyle) {
                    popupStyle.display = "flex";
                    popupStyle.zIndex = 100;
                    popupStyle.backgroundColor = "rgba(113, 113, 113, 0.3)";
                    popupStyle.alignItems = "center";
                    popupStyle.justifyContent = "center";
                }
                popup.setAttribute("closable", "");

                var onClick =
                    popup.onClick ||
                    function(e) {
                        if (e.target === popup && popup.hasAttribute("closable")) {
                            popupStyle.display = "none";
                        }
                    };
                popup.addEventListener("click", onClick);
            });
        }
    </script>
</body>

</html>