// TIMER VARIABLES
var timeEl = document.querySelector("#timer");
var secondsLeft = 90;

// QUESTION & ANSWER CONTAINER VARIABLES
// var questionE1 = document.querySelector(".question");
// var choiceEl = Array.from(document.querySelectorAll("#choice"));
var currentQuestion = 0;
var currentChoices = 0;
var playerPoints = 0;
var correctAnswerArray = 0;
var questionText = document.querySelector("#question-text");
var choiceText = document.querySelector("#choice-text");
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
        choices: ["To suck up water for drinking and cooling", "To use as a snorkel", "To grab items that are too large to inhale", "To communicate (trumpet warnings and greet one another)", "All are true"],
        answer: "All are true"
    },
    {
        question: "On which continent is the elephant not native/ found in the wild?",
        choices: ["South America", "Africa", "Asia", "Elephants are native to all 3 continents", "Elephants are not native to any of these continents"],
        answer: "South America"
    },
    {
        question: "Which of the following is the largest living elephant species?",
        choices: ["Asian", "African Savanna", "African Forest", "Woolly Mammoth", "Mr. Snuffleupagus"],
        answer: "African Savanna"
    },
    {
        question: "How much does a baby elephant normally weigh at birth?",
        choices: ["100 - 150 lbs", "200 - 250 lbs", "300 - 350 lbs", "400 - 500 lbs", "up to 800 lbs depending on the species"],
        answer: "200 - 250 lbs"
    },
    {
        question: "Which of the following poses the greatest threat to elephants' survival?",
        choices: ["Large feline predators (ex. lions)",
            "Declining birth rates",
            "Humans (poaching and habitat destruction)",
            "Mudslides",
            "Elephant populations are not declining"],
        answer: "Humans (poaching and habitat destruction)"
    },
    {
        question: "Which of the following is a common (true) claim about elephants?",
        choices: ["Elephants are afraid of mice",
            "Elephants have the sharpest eyesight in the animal kingdom",
            "Elephants love performing in the circus",
            "An elephant a day keeps the doctor away",
            "An elephant never forgets"],
        answer: "An elephant never forgets"
    }
];


// DEFINE ALL BUTTONS
var startBtn = document.querySelector(".btn-start");
var nextBtn = document.querySelector(".next-btn");
// var questionChoiceBtn = document.querySelector(".choice-btn")
var submitBtn = document.querySelector(".submit-btn");
var highScoreBtn = document.querySelector("#play-again");
var clearScoreBtn = document.querySelector("#clear-scores");
var choicesCon = document.querySelector("#choices");
var checkAnswers = document.querySelector("#right-wrong");
var choiceBtn1 = document.querySelector("#choice1");
var choiceBtn2 = document.querySelector("#choice2");
var choiceBtn3 = document.querySelector("#choice3");
var choiceBtn4 = document.querySelector("#choice4");
var choiceBtn5 = document.querySelector("#choice5");

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
    goQuestion1();
};

function goQuestion1() {
    questionText.textContent = questionsRepo[0].question;

    choiceBtn1.textContent = questionsRepo[0].choices[0];
    choiceBtn2.textContent = questionsRepo[0].choices[1];
    choiceBtn3.textContent = questionsRepo[0].choices[2];
    choiceBtn4.textContent = questionsRepo[0].choices[3];
    choiceBtn5.textContent = questionsRepo[0].choices[4];

    if (questionChoiceBtn = questionsRepo[0].answer) {
        checkAnswers.textContent = "You are correct!";
    } else {
        checkAnswersCon.textContent = "Oooh... Wrong!";
        secondsLeft = secondsLeft - 10;
    };
    startQuestion2();
};

function startQuestion2() {
    // questionsRepo.innerHTML = "";
    // for (let i = 0; i < questionsRepo[currentQuestion].length; i++);
    questionText.textContent = questionsRepo[1].question;

    choiceBtn1.textContent = questionsRepo[1].choices[0];
    choiceBtn2.textContent = questionsRepo[1].choices[1];
    choiceBtn3.textContent = questionsRepo[1].choices[2];
    choiceBtn4.textContent = questionsRepo[1].choices[3];
    choiceBtn5.textContent = questionsRepo[1].choices[4];

    if (questionChoiceBtn = questionsRepo[0].answer) {
        checkAnswers.textContent = "You are correct!";
    } else {
        checkAnswersCon.textContent = "Oooh... Wrong!";
        secondsLeft = secondsLeft - 10;
    };

    startQuestion3();
};
function startQuestion3() {
    // questionsRepo.innerHTML = "";
    // for (let i = 0; i < questionsRepo[currentQuestion].length; i++);
    questionText.textContent = questionsRepo[2].question;

    choiceBtn1.textContent = questionsRepo[2].choices[0];
    choiceBtn2.textContent = questionsRepo[2].choices[1];
    choiceBtn3.textContent = questionsRepo[2].choices[2];
    choiceBtn4.textContent = questionsRepo[2].choices[3];
    choiceBtn5.textContent = questionsRepo[2].choices[4];

    if (questionChoiceBtn = questionsRepo[0].answer) {
        checkAnswers.textContent = "You are correct!";
    } else {
        checkAnswersCon.textContent = "Oooh... Wrong!";
        secondsLeft = secondsLeft - 10;
    };

    startQuestion4();
};

function startQuestion4() {
    // questionsRepo.innerHTML = "";
    // for (let i = 0; i < questionsRepo[currentQuestion].length; i++);
    questionText.textContent = questionsRepo[3].question;

    choiceBtn1.textContent = questionsRepo[3].choices[0];
    choiceBtn2.textContent = questionsRepo[3].choices[1];
    choiceBtn3.textContent = questionsRepo[3].choices[2];
    choiceBtn4.textContent = questionsRepo[3].choices[3];
    choiceBtn5.textContent = questionsRepo[3].choices[4];

    if (questionChoiceBtn = questionsRepo[0].answer) {
        checkAnswers.textContent = "You are correct!";
    } else {
        checkAnswersCon.textContent = "Oooh... Wrong!";
        secondsLeft = secondsLeft - 10;
    };

    startQuestion5();
};

function startQuestion5() {
    questionText.textContent = questionsRepo[4].question;

    choiceBtn1.textContent = questionsRepo[4].choices[0];
    choiceBtn2.textContent = questionsRepo[4].choices[1];
    choiceBtn3.textContent = questionsRepo[4].choices[2];
    choiceBtn4.textContent = questionsRepo[4].choices[3];
    choiceBtn5.textContent = questionsRepo[4].choices[4];

    if (questionChoiceBtn = questionsRepo[0].answer) {
        checkAnswers.textContent = "You are correct!";
    } else {
        checkAnswersCon.textContent = "Oooh... Wrong!";
        secondsLeft = secondsLeft - 10;
    };

    startQuestion6();
};

function startQuestion6() {
    questionText.textContent = questionsRepo[5].question;

    choiceBtn1.textContent = questionsRepo[5].choices[0];
    choiceBtn2.textContent = questionsRepo[5].choices[1];
    choiceBtn3.textContent = questionsRepo[5].choices[2];
    choiceBtn4.textContent = questionsRepo[5].choices[3];
    choiceBtn5.textContent = questionsRepo[5].choices[4];

    if (questionChoiceBtn = questionsRepo[0].answer) {
        checkAnswers.textContent = "You are correct!";
    } else {
        checkAnswersCon.textContent = "Oooh... Wrong!";
        secondsLeft = secondsLeft - 10;
    };

    endQuiz();
};


// function checkAnswer() {

//     if () {
//         checkAnswersCon.textContent = "You are correct!";
//     } else {
//         checkAnswersCon.textContent = "Oooh... Wrong!";
//         secondsLeft = secondsLeft - 10;
//     };

    //     currentQuestion++;
    //     nextBtn.onclick = startQuestions();
    // };

    function endQuiz() {
        clearInterval(timerInterval);
    }

    // SET ALL EVENT LISTENERS FOR BUTTONS
    startBtn.addEventListener("click", startQuiz);
// nextBtn.addEventListener("click", startQuiz);

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