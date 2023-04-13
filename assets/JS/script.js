// TIMER VARIABLES
var timeEl = document.querySelector("#timer");
var secondsLeft = 90;

// QUESTION & ANSWER CONTAINER VARIABLES
// var questionE1 = document.querySelector(".question");
// var choiceEl = Array.from(document.querySelectorAll("#choice"));
var currentQuestion = 0;
var playerPoints = 0;
var correctAnswer = true;
var questionText = document.querySelector("#test");
var choiceText = document.querySelector("#choice-text");
var cText1 = document.querySelector("#un");
var cText2 = document.querySelector("#deux");
var cText3 = document.querySelector("#trois");
var cText4 = document.querySelector("#quatre");
var cText5 = document.querySelector("#cinq");
questionNumber = 0;
var timerInterval;

// DEFINE IMG VARIABLE WITHIN QUESTIONS SECTION
var imgEl = document.getElementById("img");
var rightWrongResponse = document.querySelector(".right-wrong");

// DEFINE EACH SECTION THAT IS HIDDEN TO UNHIDE ON CLICK
var introPageEl = document.querySelector(".start-container");
var quizQuestionsEl = document.querySelector(".questions-container");
var playerScoreEl = document.querySelector(".score-container");
var leaderboardEl = document.querySelector(".highscores-container");

// DEFINE THE QUESTIONS ARRAY
var questionsRepo = [
    {
        question: "Which of the following is a function of the elephant's trunk?",
        choices: [
            "To suck up water for drinking and cooling",
            "To use as a snorkel",
            "To grab items that are too large to inhale",
            "To communicate (trumpet warnings and greet one another)",
            "All are true",
        ],
        correctAnswer: "All are true"
    },
    {
        question: "On which continent is the elephant not native/ found in the wild?",
        choices: [
            "South America",
            "Africa",
            "Asia",
            "Elephants are native to all 3 continents",
            "Elephants are not native to any of these continents",
        ],
        correctAnswer: "South America"
    },
    {
        question: "Which of the following is the largest living elephant species?",
        choices: [
            "Asian",
            "African Savanna",
            "African Forest",
            "Woolly Mammoth",
            "Mr. Snuffleupagus",
        ],
        correctAnswer: "African Savanna"
    },
    {
        question: "How much does a baby elephant normally weigh at birth?",
        choices: [
            "100 - 150 lbs",
            "200 - 250 lbs",
            "300 - 350 lbs",
            "400 - 500 lbs",
            "up to 800 lbs depending on the species",
        ],
        correctAnswer: "200 - 250 lbs"
    },
    {
        question: "Which of the following poses the greatest threat to elephants' survival?",
        choices: [
            "Large feline predators (ex. lions)",
            "Declining birth rates",
            "Humans (poaching and habitat destruction)",
            "Mudslides",
            "Elephant populations are not declining",
        ],
        correctAnswer: "Humans (poaching and habitat destruction)"
    },
    {
        question: "Which of the following is a common (true) claim about elephants?",
        choices: [
            "Elephants are afraid of mice",
            "Elephants have the sharpest eyesight in the animal kingdom",
            "Elephants love performing in the circus",
            "An elephant a day keeps the doctor away",
            "An elephant never forgets",
        ],
        correctAnswer: "An elephant never forgets"
    }
];

// DEFINE ALL BUTTONS
var startBtn = document.querySelector(".btn-start");
var nextBtn = document.querySelector(".next-btn");
var answerChoiceBtn = document.querySelector(".choice-btn")
var submitBtn = document.querySelector(".submit-btn");
var highScoreBtn = document.querySelector("#play-again");
var clearScoreBtn = document.querySelector("#clear-scores");
var choicesCon = document.querySelector("#choices");

// DEFINE HIGH SCORES SUBMISSION VARIABLES
var playerInitials = document.getElementById("initials-field");

function startTimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval.

            endQuiz();
        };
    }, 1000)
}

// START QUIZ
function startQuiz() {
    introPageEl.classList.add("hide");
    quizQuestionsEl.classList.remove("hide");
    startTimer();
    startQuestions();



    // if (questionsRepo[questionNumber].answer === correctAnswer) {
    //     rightWrongResponse.textContent = "You are correct!";

    // } else {
    //     timeLeft = timeLeft - 10;
    //     rightWrongResponse.textContent = "Oooooh... WRONG!";
    // }

    // if (questionsRepo <= 5) {
    //     startQuestions(j++);
    // } else {
    //     endQuiz();
    // };

};

function startQuestions() {
    questionText.textContent = questionsRepo[currentQuestion].question;

    for (let i = 0; i < questionsRepo[currentQuestion].choices.length; i++) {
        var liElement = document.createElement("button");
        liElement.classList.add("choice-btn");
        liElement.textContent = questionsRepo[currentQuestion].choices[i]

        liElement.onclick = checkAnswer()

        choicesCon.appendChild(liElement);
    }
    

}


function checkAnswer() {
    



    currentQuestion++;
    startQuestions()
}

function endQuiz() {
    clearInterval(timerInterval);
}

// SET ALL EVENT LISTENERS FOR BUTTONS
startBtn.addEventListener("click", startQuiz);
// nextBtn.addEventListener("click", (getNewQuestion) => {
//     availQuestions++
//     getNewQuestion()
// });

// answerChoiceBtn.forEach(function (click) {
//     click.addEventListener("click", );
// });

// SET TIMER TO START ON CLICK AT START OF QUIZ


// MOVE THROUGH QUESTIONS CONTAINERS LISTING QUESTION, CHOICES, CHECKING USER INPUT AGAINST ANSWER
//! VAR i REFERS TO THE INDEX OF THE QUESTIONS ARRAY!!!!!!!
// for (var i = 0; i < 6; i++) {

//     function startQuestions() {

//     };
// }


// // DEFINE USER SCORE TO SAVE TO STORAGE
// var score = document.getElementById("score-display");

// // PRINT HIGH SCORES TO PAGE
// function displayHighScores() {
//     var scoreIndex = parseInt();
//     var topScores = read
// }




// function loadQuestion() {

// };




// function sendMessage() {
//     timeEl.textContent = "Game over!";
// }

// setTime();

