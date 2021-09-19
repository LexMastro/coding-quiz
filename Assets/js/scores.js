let scoreBoard = document.querySelector("ol");
let clearScore = document.getElementById("clear-button");
var storedScores = JSON.parse(localStorage.getItem("initials"));



function renderScores() {
  storedScores.sort(compare);
  storedScores.reverse();
  for (var i = 0; i < storedScores.length; i++) {
    var quizValues =
      storedScores[i].initial + " - " + storedScores[i].highScore;
    console.log(quizValues);
    scoreBoard.innerHTML += `<li>${quizValues}</li>`;
  }
}


function compare(a, b) {
  if (a.score < b.score) {
    return -1;
  }
  if (a.score > b.score) {
    return 1;
  }
  return 0;
}

if (storedScores !== null) {
  renderScores();
}


clearScore.addEventListener("click", function () {
  localStorage.removeItem("initials");
  scoreBoard.innerHTML = `<li>No scores</li>`;
});