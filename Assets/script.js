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
        title:  "1. How do you create a function in JavaScript?",
        choices: ["A. function = myFunction()", "B. function myFunction()", "C. function:myFunction()", "D. function, myFunction()"],
        answer: 1
    },

    {
        title:  "2. Which is the correct way to write an IF statement in JavaScript?",
        choices: ["A. if (i == 5)",  "B. if i == 5 then", "C. if i = 5 then", "if i - 5 then"],
        answer: "A. if (i == 5)"
    },

    {
        title:  "3. How do you add a comment in a JavaScript?",
        choices: [ "A. <!-- This is a comment-->", "B. //This is a comment",  "C. 'This is a comment'", "D. **This is a comment**"],
        answer: "B. //This is a comment"
    }, 
    
    {
        title:  "4. What is the correct way to write a JavaScript array?",
        choices: ["A. var colors = (1:'red', 2:'green', 3:'blue'),", "B. var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue)", "C. var colors = 'red, 'green, 'blue'", "D. var = colors ['red', 'blue', 'green']"],
        answer: "D. var = colors ['red', 'blue', 'green']"
    },

    {
        title:  "5. How do you declare a JavaScript variable?",
        choices: ["A. v personName;", "B. var personName;",  "C. variable personName;"],
        answer: "B. var personName;"

    }, 
    
    {
        title:  "6. Which operator is used to assign a value to a variable?",
        choices: [ "A. *", "B. -", "C. X", "D. ="],
        answer: "D. ="

    },

];

let correctText = document.getElementById("correctText");
let wrongText = document.getElementById("wrongText");
let score = 0;
let userInitals = "";
let questionNumber = 0;
let currentQuestion;
let finalScore;



startButton.addEventListener("click", startQuiz);

function startQuiz() {

    startButton.classList.add("hide");
    quizHeading.classList.add("hide");
    answers.classList.remove("hide");
    questionNumber = 0;
    currentQuestion;
    quizContainer.classList.remove("hide");
    score.innerHTML = "";
    const question = quizQuestions[questionNumber];
    const choices = question.choices;
    answerContainer.textContent = "";

    for (let index = 0; index < choices.length; index++) {
        const choice = choices[index];

        const button = document.createElement('button');
        button.textContent = choices[index]
        button.addEventListener('click', checkAnswer)
        answerContainer.append(button);
    }

    questionTitle.textContent = question.title;
}



function checkAnswer(clickedChoice) {

    if (!currentQuestion) {
        return;
    }
    if (currentQuestion.answer === choices) {
        correctText.classList.remove("hide");
        score = score + 5;
    }
    else {
        wrongText.classList.remove("hide");
        sec -= 10;
    }

    currentQuestion++;

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
   currentQuestion = quizQuestions[questionNumber];
    
   
    


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



