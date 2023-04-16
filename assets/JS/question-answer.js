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
var correctAnswer = false;
var questionsIndex = 0;
var availableQuestions = [];
var quizScore;

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