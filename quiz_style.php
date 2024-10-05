const questions = [
    {
        question: "HTML stands for -",
        answers: [

            { text: "HighText Machine Language", correct: false },
            { text: "HyperText Markup Language", correct: true },
            { text: "HyperText and links Markup Language", correct: false },
            { text: "None of these", correct: false },
        ],
        type: "HTML"

    },
    {
        question: "The correct sequence of HTML tags for starting a webpage is -",
        answers: [

            { text: "HTML, Head, Title, Body", correct: true },
            { text: "HTML, Head, Title, Body", correct: false },
            { text: "HTML, Body, Title, Headi", correct: false },
            { text: "Head, Title, HTML, body", correct: false },
        ],
        type: "HTML"

    },
    {
        question: "Which of the following element is responsible for making the text bold in HTML?",
        answers: [

            { text: "<pre>", correct: false },
            { text: "<a>", correct: false },
            { text: "<b>", correct: true },
            { text: "<br>", correct: false },
        ],
        type: "HTML"

    },
    {
        question: "Which of the following tag is used for inserting the largest heading in HTML?",
        answers: [

            { text: "<h5>", correct: false },
            { text: "<h3>", correct: false },
            { text: "<h1>", correct: true },
            { text: "<h6>", correct: false },
        ],
        type: "HTML"

    },
    {
        question: "Which of the following tag is used to insert a line-break in HTML?",
        answers: [

            { text: "<br>", correct: true },
            { text: "<a>", correct: false },
            { text: "<pre>", correct: false },
            { text: "<b>", correct: false },
        ],
        type: "HTML"

    },
    {
        question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
        answers: [

            { text: "<ol>", correct: false },
            { text: "<li>", correct: false },
            { text: "<i>", correct: false },
            { text: "<ul>", correct: true },
        ],
        type: "HTML"

    },
    {
        question: "Which character is used to represent the closing of a tag in HTML?",
        answers: [

            { text: "!", correct: false },
            { text: "/", correct: true },
            { text: "\\", correct: false },
            { text: ".", correct: false },
        ],
        type: "HTML"

    },
    {
        question: "How to create an ordered list (a list with the list items in numbers) in HTML?",
        answers: [

            { text: "<i>", correct: false },
            { text: "<ul>", correct: false },
            { text: "<ol>", correct: true },
            { text: "<i>", correct: false },
        ],
        type: "HTML"

    },
    {
        question: "HTML stands for -",
        answers: [

            { text: "HighText Machine Language", correct: false },
            { text: "HyperText Markup Language", correct: true },
            { text: "HyperText and links Markup Language", correct: false },
            { text: "None of these", correct: false },
        ],
        type: "HTML"

    },
    {
        question: "HTML stands for -",
        answers: [

            { text: "HighText Machine Language", correct: false },
            { text: "HyperText Markup Language", correct: true },
            { text: "HyperText and links Markup Language", correct: false },
            { text: "None of these", correct: false },
        ],
        type: "HTML"

    }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();

    // console.log(quiz_name1)
    let currentQuestion = questions[currentQuestionIndex];
    console.log("Current Question type = ",currentQuestion.type)
    console.log("quiz name = ",localStorage.getItem("quiz"));
    if(currentQuestion.type == localStorage.getItem("quiz"))
    {
    let questionNo = currentQuestionIndex + 1;
    
        questionElement.innerHTML =  currentQuestion.type+" "+questionNo + ". " + currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
    }
    else{
        handleNextButton()
    }
    
    
   
    

}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!!!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
})

startQuiz();


var quiz_name1 = localStorage.getItem("quiz")
document.getElementById("h1").textContent = quiz_name1
// console.log("Quiz_name = ",quiz_name1 )
if (quiz_name1 == "HTML") {

}
else if (quiz_name1 == "CSS") {

}
else if (quiz_name1 == "JS") {

}
else if (quiz_name1 == "JAVA") {

}
else if (quiz_name1 == "PYTHON") {

}
else if (quiz_name1 == "C++") {

}
else if (quiz_name1 == "C") {

}
else if (quiz_name1 == "PHP") {

}
else if (quiz_name1 == "GO") {

}
console.log(quiz_name1)
console.log("user email = ",localStorage.getItem('email'));
console.log("user email = ",localStorage.getItem('email1'));




