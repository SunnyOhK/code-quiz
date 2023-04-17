// DEFINE GLOBAL VARIABLES FOR HOME PAGE
var startBtn = document.querySelector('.btn-start');
var homePage = document.querySelector('.home');
var quizPage = document.querySelector('.qna-page');


// DEFINE Q&A PAGE VARIABLES
var timerEl = document.querySelector('#timer');
var questionEl = document.querySelector('.question');
var choiceEl = document.querySelector('.choice-btn');
var textCorrect = document.querySelector('#correct');
var textWrong = document.querySelector('#wrong');
// Q&A stored in .json file []
var currentQuestion = 0;
var questionsIndex = 0;
var score = 0;

// SET STARTING POINT FOR QUESTIONS COUNTER AND TIMER
let timeStart;
var secondsLeft = 90;
let questionsCounter = 0;

var correctAnswer = false;
var questionsIndex = 0;
var availableQuestions = [];

// TESTING WITH CONSOLE LOG TO MAKE SURE JSON FILE IS CONNECTED

// PULL QUESTIONS FROM ARRAY IN JSON
let questions = [];
fetch('../questions.json')
    .then(res => res.json())
    .then(data => console.log(data))

fetch('../questions.json')
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions;
        startQuiz();
    })

function startQuiz() {
    timerCountdown = 90;
    currentQuestion = 0;
    score = 0;
    availableQuestions = [...questions];

    startTimer();
    getNewQuestion();
};

function startTimer() {
    timerInterval = setInterval(function () {
        timerCountdown--;
        timer.textContent = timerCountdown;

        if (timerCountdown <= 0) {
            // Stops execution of action at set interval.
            endQuiz();
        };
    }, 1000)
};

function getNewQuestion() {
    for (i = 0; i < availableQuestions.length - 1; i++) {

        // QUESTION 1
        questionText.textContent = availableQuestions[i].question;
        choicesText.textContent = availableQuestions[i].choices[0];
        choicesText2.textContent = availableQuestions[i].choices[1];
        choicesText3.textContent = availableQuestions[i].choices[2];
        choicesText4.textContent = availableQuestions[i].choices[3];
        choicesText5.textContent = availableQuestions[i].choices[4];
        correctAnswer = availableQuestions[i].answer;
    }

    if (timerCountdown === 0) {
        localStorage.setItem("quizScore", score);
        return window.location.assign("/code-quiz/gameover.html");
    }

    questionsCounter++;
    progressLabel.textContent = questionsCounter + "/6";
    // update progress

    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        var number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    correctAnswer = true;
    console.log(availableQuestions);
    checkAnswer();
};

choices.forEach((choice) => {
    choiceBtn.addEventListener("click", (e) => {
        if (!correctAnswer) return;

        correctAnswer = false;
        var selectChoice = e.target;
        var selectAnswer = selectChoice.dataset["number"];

        // ADDING PARAMETERS TO CLASS SO QUIZ CAN SEE CORRECT V. INCORRECT
        let classToApply = "wrong";
        if (selectAnswer == currentQuestion.answer) {
            classToApply = "correct";
        }

        // DEDUCT TIME/ SCORE FOR WRONG ANSWERS
        if (classToApply == "wrong") {
            timerCountdown -= 10;
        }

        // ASSIGNING ABOVE CLASSES TO ELEMENTS FOR ASSESSMENT
        selectChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

// ADD EVENT LISTENERS FOR PAGE NAVIGATION BUTTONS
submitBtn.addEventListener('click', saveScore);
playBtn.addEventListener('click', startQuiz);