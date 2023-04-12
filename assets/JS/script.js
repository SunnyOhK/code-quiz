// TIMER VARIABLES
var timeEl = document.querySelector(".timer");
var secondsLeft = 75;

// QUESTION & ANSWER CONTAINER VARIABLES
var questionE1 = document.querySelector(".question");
var answerAEl = document.getElementById("Answer 1");
var answerBEl = document.getElementById("Answer 2");
var answerCEl = document.getElementById("Answer 3");
var answerDEl = document.getElementById("Answer 4");
var answerEEl = document.getElementById("Answer 5");

// DEFINE IMG VARIABLE WITHIN QUESTIONS SECTION
var imgEl = document.getElementById("img");

// DEFINE EACH SECTION THAT IS HIDDEN TO UNHIDE ON CLICK
var introPageEl = document.querySelector(".start-container");
var startQuizQuestionsEl = document.querySelector(".questions-container");
var playerScoreEl = document.querySelector(".score-container");
var leaderboardEl = document.querySelector(".highscores-container");

// DEFINE ALL BUTTONS
var startBtn = document.querySelector(".btn-start");
var nextBtn = document.querySelector(".next-btn");
var submitBtn = document.querySelector(".submit-btn");
var highScoreBtn = document.getElementById("Play Again");
var clearScoreBtn = document.getElementById("Clear Scores");

// CREATE VARIABLES FOR QUESTIONS AND ARRAYS FOR ANSWERS
var questionA = "Which of the following is a function of the elephant's trunk?";
var answerChoicesA = ["To suck up water for drinking and cooling", "To use as a snorkel", "To grab items that are too large to inhale", "To communicate (trumpet warnings and greet one another)", "All are true"];
var correctAnswerA = "All are true";

var questionB = "On which continent is the elephant not native/ found in the wild?";
var answerChoicesB = ["South America", "Africa", "Asia", "Elephants are native to all 3 continents", "Elephants are not native to any of these continents"];
var correctAnswerB = "South America";

var questionC = "Which of the following is the largest living elephant species?";
var answerChoicesC = ["Asian", "African Savanna", "African Forest", "Woolly Mammoth", "Mr. Snuffleupagus"];
var correctAnswerC = "African Savanna";

var questionD = "How much does a baby elephant normally weigh at birth?";
var answerChoicesD = ["100 - 150 lbs", "200 - 250 lbs", "300 - 350 lbs", "400 - 500 lbs", "up to 800 lbs depending on the species"];
var correctAnswerD = "200 - 250 lbs";

var questionE = "Which of the following poses the greatest threat to elephants' survival?";
var answerChoiceE = ["Large feline predators (ex. lions)", "Declining birth rates", "Humans (poaching and habitat destruction)", "Mudslides", "Elephant populations are not declining"];
var correctAnswerE = "Humans (poaching and habitat destruction)";

var question6 = "Which of the following is a common (true) claim about elephants?";
var answers6 = ["Elephants are afraid of mice", "Elephants have the sharpest eyesight in the animal kingdom", "Elephants love performing in the circus", "An elephant a day keeps the doctor away", "An elephant never forgets"];
var correctAnswer6 = "An elephant never forgets";

var playerPoints = 0;

function loadQuestion() {

};


function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            // Stops execution of action at set interval.
            clearInterval(timerInterval);
            // Calls function to create and send 'game over' message
            sendMessage();
        }

    }, 1000);
}

function sendMessage() {
    timeEl.textContent = "Game over!";
}

setTime();