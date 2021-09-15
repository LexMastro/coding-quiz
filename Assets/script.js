const quizHeading = document.querySelector("h1");
const startButton = document.getElementById("start");
let highScores = document.getElementById("highscores");
const highScoresButton = document.getElementById("showScoresBtn");
const mainContainer = document.getElementById("mainContainer");
const quizContainer = document.getElementById("quizContainer");
let answerContainer = document.getElementById("answers");
let questionTitle = document.getElementById('question');
let scoreArea = document.getElementById("scores");



highScores = JSON.parse(localStorage.getItem("highscores")) || [];

var quizQuestions = [
    {
        question: "1. How do you create a function in JavaScript?",
        answers: [
            { Text: "A. function = myFunction()", correct: false },
            { text: "B. function myFunction()", correct: true },
            { text: "C. function:myFunction()", correct: false },
            { text: "D. function, myFunction()", correct: false }
        ]

    },
    {
        question: "Which is the correct way to write an IF statement in JavaScript?",
        answers: [
            { text: "if (i == 5)", correct: true },
            { text: "if i == 5 then", correct: false },
            { text: "if i = 5 then", correct: false },
            { text: "if i - 5 then", correct: false }
        ]

    },
    {
        question: "How do you add a comment in a JavaScript?",
        answers: [
            { text: "<!-- This is a comment-->", correct: false },
            { text: "//This is a comment", correct: true },
            { text: "'This is a comment'", correct: false },
            { text: "**This is a comment**", correct: false }
        ]

    }, {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
            { text: "var colors = (1:'red', 2:'green', 3:'blue'),", correct: false },
            { text: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue)", correct: false },
            { text: "var colors = 'red, 'green, 'blue'", correct: false },
            { text: "var colors ['red', 'blue', 'green']", correct: true }
        ]

    },
    {
        question: "How do you declare a JavaScript variable?",
        answers: [
            { text: "v personName;", correct: false },
            { text: "var personName;", correct: true },
            { text: "variable personName;", correct: false }
        ]

    }, {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            { text: "*", correct: false },
            { text: "-", correct: false },
            { text: "X", correct: false },
            { text: "=", correct: true }
        ]

    },

];

let correctText = document.getElementById("correctText");
let wrongText = document.getElementById("wrongText");
let score = 0;
let userInitals = "";
let questionNumber = 0;
let finalScore;



startButton.addEventListener("click", startQuiz);

function startQuiz() {

    startButton.classList.add("hide");
    quizHeading.classList.add("hide");
    answers.classList.remove("hide");
    questionNumber = 0;
    quizContainer.classList.remove("hide");
    score.innerHTML = "";
    const question = quizQuestions[questionNumber];
    const choices = question.answers;
    answerContainer.textContent = "";

    for (let index = 0; index < choices.length; index++) {
        const choice = choices[index];

        const button = document.createElement('button');
        button.textContent = choice.text;
        button.setAttribute('data-isAnswer', choice.correct);
        button.addEventListener('click', checkAnswer)
        answerContainer.append(button);
    }

    questionTitle.textContent = question.question;
}



function checkAnswer(clickedAnswer) {

    const isAnswer = clickedAnswer.target.getAttribute('data-isAnswer') === 'true';

    if (isAnswer) {
        correctText.classList.remove("hide");
        score++;
    }
    else {
        wrongText.classList.remove("hide");
        sec -= 10;
    }

    questionNumber++;

    if (questionNumber === quizQuestions.length) {
        finishQuiz();
        return;
    }
    else {
        nextQuestion();
    }
    nextQuestion();
};


function nextQuestion() {
    question = quizQuestions[questionNumber];
    
    // 


}






var sec = 100;
var time = setInterval(quizTimer, 1000);
startButton.addEventListener("click", quizTimer);
function quizTimer() {
    document.getElementById('timer').innerHTML = sec + " sec remaining";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time is up!");
    }

}

quizTimer();



