// TIMER VARIABLES
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var secondsLeft = 91;

// QUESTION & ANSWER CONTAINER VARIABLES
var questionE1 = document.querySelector("question");
console.log(question);

// CREATE VARIABLES FOR QUESTIONS AND ARRAYS FOR ANSWERS
var question1 = "Which of the following is a function of the elephant's trunk?";
var answers1 = ["To suck up water for drinking and cooling", "To use as a snorkel", "To grab items that are too large to inhale", "To communicate (trumpet warnings and greet one another)", "All are true"];
var correctAnswer1 = "All are true";

var question2 = "On which continent is the elephant not native/ found in the wild?";
var answers2 = ["South America", "Africa", "Asia", "Elephants are native to all 3 continents", "Elephants are not native to any of these continents"];
var correctAnswer2 = "South America";

var question3 = "Which of the following is the largest living elephant species?";
var answers3 = ["Asian", "African Savanna", "African Forest", "Woolly Mammoth", "Mr. Snuffleupagus"];
var correctAnswer3 = "African Savanna";

var question4 = "How much does a baby elephant normally weigh at birth?";
var answers4 = ["100 - 150 lbs", "200 - 250 lbs", "300 - 350 lbs", "400 - 500 lbs", "up to 800 lbs depending on the species"];
var correctAnswer4 = "200 - 250 lbs";

var question5 = "Which of the following poses the greatest threat to elephants' survival?";
var answers5 = ["Large feline predators (ex. lions)", "Declining birth rates", "Humans (poaching and habitat destruction)", "Mudslides", "Elephant populations are not declining"];
var correctAnswer5 = "Humans (poaching and habitat destruction)";

var question6 = "Which of the following is a common (true) claim about elephants?";
var answers6 = ["Elephants are afraid of mice", "Elephants have the sharpest eyesight in the animal kingdom", "Elephants love performing in the circus", "An elephant a day keeps the doctor away", "An elephant never forgets"];
var correctAnswer6 = "An elephant never forgets";

var playerPoints = 0;

function loadQuestion() {

};

// BUTTON VARIABLES BY ID
var btnStartE1 = document.querySelector("#start-game");
var btnSubmitE1 = document.querySelector("#submit-answer");
var btnSkipE1 = document.querySelector("#skip-question");
var btnClearE1 = document.querySelector("#clear-score");

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