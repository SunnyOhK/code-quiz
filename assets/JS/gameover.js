var initials = document.querySelector(".initials-field")
var submitBtn = document.querySelector(".submit-btn");
var myScore = document.querySelector(".score-display");
var lastScore = localStorage.getItem("pastScores");

// PULL PLAYER SCORE FROM LOCAL STORAGE TO PRINT TO TABLE
var highScore = JSON.parse(localStorage.getItem("highScore")) || [];

console.log(highScore);

var MAX_HIGH_SCORES = 5;

myScore.innerText = lastScore

initials.addEventListener("keyup", () => {
    // console.log(initials.value); logs what is typed in the form
    submitBtn = !initials.value;
});

function (saveScore) = (e) => {
    e.preventDefault();
    // console.log('clicked save') -> testing save button event

    var score = {
        score: mostRecentScore,
        name: initials.value,
    };
    highScore.push(score);

    // used to create a sorted array
    highScore.sort((a, b) => b.score - a.score);
    // at index 5 cut off everything following it
    highScore.splice(5);

    localStorage.setItem('highScore', JSON.stringify(highScore));
    window.location.assign('/code-quiz/scoreboard.html');
};
// has GET item instead of SET ite

console.log(highScore);