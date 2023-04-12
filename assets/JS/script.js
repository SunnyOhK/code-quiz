// TIMER VARIABLES
var timeEl = document.querySelector(".timer");

// QUESTION & ANSWER CONTAINER VARIABLES
// var questionE1 = document.querySelector(".question");
// var choicesEl = Array.from(document.querySelectorAll("#choices"));
var currentQuestion = {};
var playerPoints = 0;
var correctAnswer = true;
var availQuestions = [];

// DEFINE IMG VARIABLE WITHIN QUESTIONS SECTION
var imgEl = document.getElementById("img");

// DEFINE EACH SECTION THAT IS HIDDEN TO UNHIDE ON CLICK
var introPageEl = document.querySelector(".start-container");
var quizQuestionsEl = document.querySelector(".questions-container");
var playerScoreEl = document.querySelector(".score-container");
var leaderboardEl = document.querySelector(".highscores-container");

// DEFINE ALL BUTTONS
var startBtn = document.querySelector(".btn-start");
var nextBtn = document.querySelector(".next-btn");
var submitBtn = document.querySelector(".submit-btn");
var highScoreBtn = document.getElementById("play-again");
var clearScoreBtn = document.getElementById("clear-scores");

// DEFINE HIGH SCORES SUBMISSION VARIABLES
var playerInitials = document.getElementById("initials-field");

// CREATE VARIABLES FOR QUESTIONS AND ARRAYS FOR ANSWERS
var questions = [
    {
        question: "Which of the following is a function of the elephant's trunk?",
        choice1: "To suck up water for drinking and cooling",
        choice2: "To use as a snorkel",
        choice3: "To grab items that are too large to inhale",
        choice4: "To communicate (trumpet warnings and greet one another)",
        choice5: "All are true",
        correct: 5;
    },
    {
        question: "On which continent is the elephant not native/ found in the wild?",
        choice1: "South America",
        choice2: "Africa",
        choice3: "Asia",
        choice4: "Elephants are native to all 3 continents",
        choice5: "Elephants are not native to any of these continents",
        correct: 1;
    },
    {
        question: "Which of the following is the largest living elephant species?",
        choice1: "Asian",
        choice2: "African Savanna",
        choice3: "African Forest",
        choice4: "Woolly Mammoth",
        choice5: "Mr. Snuffleupagus",
        correct: 2;
    },
    {
        question: "How much does a baby elephant normally weigh at birth?",
        choice1: "100 - 150 lbs",
        choice2: "200 - 250 lbs",
        choice3: "300 - 350 lbs",
        choice4: "400 - 500 lbs",
        choice5: "up to 800 lbs depending on the species",
        correct: 2;
    },
    {
        question: "Which of the following poses the greatest threat to elephants' survival?",
        choice1: "Large feline predators (ex. lions)",
        choice2: "Declining birth rates",
        choice3: "Humans (poaching and habitat destruction)",
        choice4: "Mudslides",
        choice5: "Elephant populations are not declining",
        correct: 3;
    },
    {
        question: "Which of the following is a common (true) claim about elephants?",
        choice1: "Elephants are afraid of mice",
        choice2: "Elephants have the sharpest eyesight in the animal kingdom",
        choice3: "Elephants love performing in the circus",
        choice4: "An elephant a day keeps the doctor away",
        choice5: "An elephant never forgets",
        correct: 5;
    },
]

// START QUIZ
function startQuiz() {
    questionCounter = 0;
    availQuestions = [...questions];
    getNewQuestion();
    // introPageEl.setAttribute("hide");
};

function getNewQuestion() {
    if(availQuestions.length === 0 || timeEl === 0) {
        localStorage.setItem('playerInitials', score);

        return window.location.assign('/end.html');
    };

    var questionsIndex = availQuestions.length;
    currentQuestion = availQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    // var choicesEl = document.getElementById("choices");
    function choices.forEach() {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    }

    availQuestions.splice(questionsIndex, 1);

    correctAnswer = true;
};

// TRIGGER STARTING EVENT LISTENERS FOR TIMER AND QUESTIONS
// addEventListerner(event, function)
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", () => {

});

// SET TIMER TO START ON CLICK AT START OF QUIZ
function startTimer() {
    var secondsLeft = 90;

    setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + "s left";

        if (secondsLeft === 0) {
            // Stops execution of action at set interval.
            clearInterval(timerInterval);
            // Calls function to create and send 'game over' message
            timeEl.displayMessage = "Time's Up!";
            introPageEl();
        }
    }, 1000);
}

// MOVE THROUGH QUESTIONS CONTAINERS LISTING QUESTION, CHOICES, CHECKING USER INPUT AGAINST ANSWER

for (var i = 0; i < 6; i++) {

    function startQuestions(){

    };
}


// DEFINE USER SCORE TO SAVE TO STORAGE
var score = document.getElementById("score-display");

// PRINT HIGH SCORES TO PAGE
function displayHighScores() {
    var scoreIndex = parseInt();
    var topScores = read
}




function loadQuestion() {

};




function sendMessage() {
    timeEl.textContent = "Game over!";
}

setTime();