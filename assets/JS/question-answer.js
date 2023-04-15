// DEFINE QUESTION AND ANSWER VARIABLES
var questionsArray = [];
var choicesArray = [];
var answersArray = [];

// DEFINE WHERE VARIABLES WILL PRINT TO WEBPAGE
var questionText = document.querySelector('#question-text');
var choicesText = document.querySelector('#choice-text');
var choicesText2 = document.querySelector('#choice-text2');
var choicesText3 = document.querySelector('#choice-text3');
var choicesText4 = document.querySelector('#choice-text4');
var choicesText5 = document.querySelector('#choice-text5');
var progressLabel = document.querySelector('#counter');
var timerEl = document.querySelector('#timer');
var answerCheckText = document.querySelector('#right-wrong');
var choiceBtn = document.querySelector('.choice-btn');

// SET STARTING POINT FOR QUESTIONS COUNTER AND TIMER
let timeStart;
var secondsLeft = 90;
let questionsCounter = 0;
let currentQuestion = 0;
let correctAnswer = false;
var availableQuestions = 6;
var quizScore;

// TESTING WITH CONSOLE LOG TO MAKE SURE JSON FILE IS CONNECTED
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
    questionsCounter = 0;
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
    for (let i = 0; i < availableQuestions.length; i++) {

        // QUESTION 1
        questionText.textContent = availableQuestions[i].question;
        choicesText.textContent = availableQuestions[i].choices[0];
        choicesText2.textContent = availableQuestions[i].choices[1];
        choicesText3.textContent = availableQuestions[i].choices[2];
        choicesText4.textContent = availableQuestions[i].choices[3];
        choicesText5.textContent = availableQuestions[i].choices[4];
    }

    if (secondsLeft === 0) {
        localStorage.setItem("quizScore", score);
        return window.location.assign("/code-quiz/gameover.html");
    }

    console.log(availableQuestions);
    checkAnswer();
    getNewQuestion();
};

function checkAnswer() {

        if (availableQuestions[i].choices === availableQuestions[i].answer) {
            answerCheckText.textContent = "You are correct!";
            getNewQuestion();
        } else {
            answerCheckText.textContent = "Oooooh... WRONG!";
            secondsLeft -= 10;
            getNewQuestion();
        }
    };

choiceBtn.addEventListener('click', (checkAnswer));