let scoreBoard = document.querySelector("ol");
let clearScore = document.getElementById("clear-button");
var storedScores = JSON.parse(localStorage.getItem("initials"));

//Renders scores in a list as <li> elements

function renderScores() {
  storedScores.sort(compare);
  storedScores.reverse();
  for (var i = 0; i < storedScores.length; i++) {
    var quizValues =
    storedScores[i]["initials"] + " - " + storedScores[i]["score"];
    console.log(quizValues);
    scoreBoard.innerHTML += `<li>${quizValues}</li>`;
  }
}

// Arrange scores in order from highest to lowest

function compare(a, b) {
  if (a.score < b.score) {
    return -1;
  }
  if (a.score > b.score) {
    return 1;
  }
  return 0;
}

// Render scoreBoard only if scores are available

if (storedScores !== null) {
  renderScores();
}

// Clear scores from leaderboard

clearScore.addEventListener("click", function () {
  localStorage.removeItem("initials");
  leaderBoard.innerHTML = `<li>No scores</li>`;
});