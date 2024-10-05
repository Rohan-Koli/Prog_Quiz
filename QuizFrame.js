
var quiz_name;
if(localStorage("email") == "admin4853@gmail.com")
{
  alert("Welcome Admin ",localStorage("email"));
}
else{
alert("welcome",localStorage("email"));
}
var homeText2 = document.getElementById("homeText2");
      if (homeText2) {
        homeText2.addEventListener("click", function (e) {
          window.location.href = "./MainFrame.php";
        });
      }
      
      var quizesText2 = document.getElementById("quizesText2");
      if (quizesText2) {
        quizesText2.addEventListener("click", function (e) {
          window.location.href = "./QuizeFrame.html";
        });
      }
      
      var scoreboardText2 = document.getElementById("scoreboardText2");
      if (scoreboardText2) {
        scoreboardText2.addEventListener("click", function (e) {
          window.location.href = "./Scoreboard.html";
        });
      }
      
      var aboutUsText2 = document.getElementById("aboutUsText2");
      if (aboutUsText2) {
        aboutUsText2.addEventListener("click", function (e) {
          window.location.href = "./Aboutus.html";
        });
      }
      
      var component14Container = document.getElementById("component14Container");
      if (component14Container) {
        component14Container.addEventListener("click", function () {
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
            function (e) {
              if (e.target === popup && popup.hasAttribute("closable")) {
                popupStyle.display = "none";
              }
            };
          popup.addEventListener("click", onClick);
        });
      }

      const sign_in = document.getElementById("component-141");

    //   sign_in.addEventListener("click",function(e)
    //   {
    //     if(sign_in.style.backgroundColor=="black"){
    //     sign_in.style.backgroundColor="red";
    //     console.log("component-141 clicked red");
    //     }
    //     else if(sign_in.style.backgroundColor="red"){
    //       sign_in.style.backgroundColor="black";
    //     console.log("component-141 clicked black");
    //     }
    //   });

      // let quiz_index = document.getElementsByClassName("quiz-index");
      // quiz_index.addEventListener("click",function(e){
      //   window.location.href = "./quiz_index.html";

      // }) 
      let quiz_index = document.getElementsByClassName("quiz-index");
 
for (let i = 0; i < quiz_index.length; i++) {
    quiz_index[i].addEventListener("click", function(e) {
        window.location.href = "./quiz_index.html";

        if(quiz_index[i].name == 5)
        {
          quiz_name = "HTML";
        }
        else if(quiz_index[i].name == 2)
        {
          quiz_name = "CSS";
        }
        else if(quiz_index[i].name == 7)
        {
          quiz_name = "JS";
        }
        else if(quiz_index[i].name == 6)
        {
        quiz_name = "C++";
        }
        else if(quiz_index[i].name == 9)
        {
           quiz_name = "GO";
        }
        else if(quiz_index[i].name == 1)
        {
          quiz_name = "JAVA";
        }
        else if(quiz_index[i].name == 3)
        {
          quiz_name = "PHP";
        }
        else if(quiz_index[i].name == 4)
        {
          quiz_name = "PYTHON";
        }
        else if(quiz_index[i].name == 8)
        {
          quiz_name = "C";
        }
        localStorage.setItem("quiz",quiz_name)
        alert(quiz_name);
        
       
        

    });
    
}


// localStorage.setItem("quiz1",quiz_name)
// console.log(quiz_name)

// let quiz_name11 =quiz_name;
// Define variables to be exported
// var variable1 = "value1";
// let variable2 = "value2";


// // Export the variables
// export { variable1, variable2,quiz_name};


