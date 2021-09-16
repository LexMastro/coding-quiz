const quizHeading = document.querySelector("h1");
const startButton = document.getElementById("start");
let highScores = document.getElementById("highscores");
const highScoresButton = document.getElementById("showScoresBtn");
const mainContainer = document.getElementById("mainContainer");
const quizContainer = document.getElementById("quizContainer");
let answerContainer = document.getElementById("answers");
let questionTitle = document.getElementById('question');
let scoreArea = document.getElementById("scores");
let submitButton = document.getElementById("submitScore");
let showScores = document.getElementById("showScoresBtn");



highScores = JSON.parse(localStorage.getItem("highscores")) || [];

var quizQuestions = [
    {
        title: "1. How do you create a function in JavaScript?",
        choices: ["A. function = myFunction()", "B. function myFunction()", "C. function:myFunction()", "D. function, myFunction()"],
        answer: "B. function myFunction()"
    },

    {
        title: "2. Which is the correct way to write an IF statement in JavaScript?",
        choices: ["A. if (i == 5)", "B. if i == 5 then", "C. if i = 5 then", "if i - 5 then"],
        answer: "A. if (i == 5)"
    },

    {
        title: "3. How do you add a comment in a JavaScript?",
        choices: ["A. <!-- This is a comment-->", "B. //This is a comment", "C. 'This is a comment'", "D. **This is a comment**"],
        answer: "B. //This is a comment"
    },

    {
        title: "4. What is the correct way to write a JavaScript array?",
        choices: ["A. var colors = (1:'red', 2:'green', 3:'blue'),", "B. var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue)", "C. var colors = 'red, 'green, 'blue'", "D. var = colors ['red', 'blue', 'green']"],
        answer: "D. var = colors ['red', 'blue', 'green']"
    },

    {
        title: "5. How do you declare a JavaScript variable?",
        choices: ["A. v personName;", "B. var personName;", "C. variable personName;"],
        answer: "B. var personName;"

    },

    {
        title: "6. Which operator is used to assign a value to a variable?",
        choices: ["A. *", "B. -", "C. X", "D. ="],
        answer: "D. ="

    },

];

let correctText = document.getElementById("correctText");
let wrongText = document.getElementById("wrongText");
let score = 0;
let questionNumber = 0;
let currentQuestion;
let finalScore;
const question = quizQuestions[questionNumber];
const choices = question.choices;
let sec = 60;




startButton.addEventListener("click", startQuiz);

function startQuiz() {
    quizTimer();


    startButton.classList.add("hide");
    quizHeading.classList.add("hide");
    answers.classList.remove("hide");
    questionNumber = 0;

    quizContainer.classList.remove("hide");
    score.innerHTML = "";

    renderQuestion(questionNumber);

}

function checkAnswer(event) {
    // grab the correct ans    
    const currentQuestion = quizQuestions[questionNumber];
    const answer = currentQuestion.answer;

    const clickedChoice = event.target.textContent;

    if (clickedChoice === answer) {
        correctText.classList.remove("hide");
        sec += 5;
        score += 10;
        
    }
    else {
        wrongText.classList.remove("hide");
        sec -= 10;
        score -= 2;
    }

    if(score < 0) {
        score = 0;
        }

    questionNumber++;

    if (questionNumber === quizQuestions.length) {
        finishQuiz();
        return;
    }
    else {
        setTimeout(function () {
            correctText.classList.add("hide");
            wrongText.classList.add("hide");
            renderQuestion(questionNumber);
        }, 1000)

    }

};

function finishQuiz() {
    // take user to submit initials section
    scoreArea.classList.remove("hide");
    // Hide quiz container
    quizContainer.classList.add("hide");

}



function renderQuestion(index) {
    const question = quizQuestions[index];
    const choices = question.choices;
    answerContainer.textContent = "";

    for (let index = 0; index < choices.length; index++) {
        const choice = choices[index];
        const button = document.createElement('button');
        button.textContent = choice
        button.addEventListener('click', checkAnswer)
        answerContainer.append(button);
    }

    questionTitle.textContent = question.title;

}




function quizTimer() {

    let time = setInterval(function () {
        document.getElementById('timer').innerHTML = "Time: " + sec + " sec remaining";
        sec--;
        if (sec < 0) {
            clearInterval(time);
            alert("Time is up!");
            finishQuiz();
        }

    }, 1000);

}





submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    // grab exisitng ones in the local storange
    const existingInitials = JSON.parse(localStorage.getItem('initials')) || [];

    // add the current user input to the exisitng ilist
    const initial = document.getElementById('initials').value;
    const scoreObject = {
        initial: initial,
        highScore: score
    }
    existingInitials.push(scoreObject)

    // resave the whote list

    localStorage.setItem("initials", JSON.stringify(existingInitials));
    renderMessage(scoreObject);

    let highScoresList = JSON.parse(localStorage.getItem("highscores"))
    // var finalScore = localStorage.getItem("finalScore")
    for (let i = 0; i < highScoresList.length; i++) {
        let paragraph = document.createElement("p");
        paragraph.textContent = highScoresList[i].initials + "         " + highScoresList[i].finalScore;
        document.getElementById("highscores").append(paragraph);
}


    highScoresList.push(scoreObject);
  
    //3. window.location.href = "highscores.html";
    localStorage.setItem("highScoresList", JSON.stringify(highScoresList));
    window.location.href = "highscores.html";

});

function renderMessage(scoreObject) {
    
    if (scoreObject !== null) {
        document.getElementById("user-highscore").textContent = scoreObject.initial +
            " scored " + scoreObject.highScore
    }

}




