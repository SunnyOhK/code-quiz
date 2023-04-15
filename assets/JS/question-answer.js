// DEFINE QUESTION AND ANSWER VARIABLES
var questionsArray = [];
var choicesArray = [];
var answersArray = [];

// DEFINE WHERE VARIABLES WILL PRINT TO WEBPAGE
var questionText = document.querySelector('#question-text');
var progressLabel = document.querySelector('#counter');
var timerEl = document.querySelector('#timer');
var answerCheckText = document.querySelector('#right-wrong');

// SET STARTING POINT FOR QUESTIONS COUNTER AND TIMER
let timeStart;
var secondsLeft = 90;
let questionsCounter = 0;
let currentQuestion = 0;
let correctAnswer = false;
var availableQuestions = 6;
let questions = [];
var quizScore;

// TESTING WITH CONSOLE LOG TO MAKE SURE JSON FILE IS CONNECTED
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



function startQuiz () {
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
    // if (availableQuestions.length === 0 || timerCountdown === 0) {
    //     localStorage.setItem("quizScore", score);
    //     // go to end page
    //     return window.location.assign("/code-quiz/gameover.html");
    // } else {
    //     getNewQuestion();
    // }

    questionText.forEach((question) => {
        question.innerText = currentQuestion['question' + _______ ]
    })

    choices.forEach((choice) => {
        var number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    correctAnswer = true;
};

// function forEach(choice) {
//     choice.addEventListener("click", (e) => {
//         // console.log(e.target); <- checked that it was bringing up the answer clicked on
//         if (!acceptingAnswers) return;

//         acceptingAnswers = false;
//         const selectChoice = e.target;
//         const selectAnswer = selectChoice.dataset["number"];

//         // had to change to let so that it would allow it to change between right and wrong
//         let classToApply = "incorrect";
//         if (selectAnswer == currentQuestion.answer) {
//             classToApply = "correct";
//         }
//         // console.log(classToApply); <- used to catch the syntax error of above & to test if it was logging 'correct'/'true' || 'incorrect'/'false'
//         if (classToApply == "correct") {
//             incrementScore(CORRECT_BONUS);
//         }
//         //  penalizes player if they get the question wrong by 5 seconds
//         if (classToApply == "incorrect") {
//             timerCount -= 5;
//         }

//         selectChoice.parentElement.classList.add(classToApply);
//         // .add is how to add classes in javascript
//         setTimeout(() => {
//             selectChoice.parentElement.classList.remove(classToApply);
//             // .remove to remove class in javascript
//             getNewQuestion();
//         }, 1000);




// timer function -> clear interval to stop timer from counting into the negatives

    // questionsCounter++;
    // progressText.innerText = "Question " + questionsCounter + "/" + MAX_QUESTIONS;
    // // update progress
    // progressBarFull.style.width = `${(questionsCounter / MAX_QUESTIONS) * 100}%`;

// function endQuiz() {

// }

// function startTime() {
//     timer++;
//     countdown.innerHTML = convertSeconds(timerCount - timer);

//     if (timer == timerCount) {
//         clearInterval(interval);

//         pleaseWork();
//     }
// }
// // redirects player if timer ends before the questions do
// function pleaseWork() {
//     return window.location.assign("/letsgetquizzical/end.html");
// }
// // absolute path needed for redirections

// getNewQuestion = () => {
//     if (availableQuestions.length === 0 || timerCount === 0) {
//         localStorage.setItem("mostRecentScore", score);
//         // go to end page
//         return window.location.assign("/letsgetquizzical/end.html");
//     }
//     questionsCounter++;
//     progressText.innerText = "Question " + questionsCounter + "/" + MAX_QUESTIONS;
//     // update progress
//     progressBarFull.style.width = `${(questionsCounter / MAX_QUESTIONS) * 100}%`;

//     const questionIndex = Math.floor(Math.random() * availableQuestions.length);
//     currentQuestion = availableQuestions[questionIndex];
//     question.innerText = currentQuestion.question;

//     choices.forEach((choice) => {
//         const number = choice.dataset["number"];
//         choice.innerText = currentQuestion["choice" + number];
//     });

//     availableQuestions.splice(questionIndex, 1);

//     acceptingAnswers = true;
// };

// choices.forEach((choice) => {
//     choice.addEventListener("click", (e) => {
//         // console.log(e.target); <- checked that it was bringing up the answer clicked on
//         if (!acceptingAnswers) return;

//         acceptingAnswers = false;
//         const selectChoice = e.target;
//         const selectAnswer = selectChoice.dataset["number"];

//         // had to change to let so that it would allow it to change between right and wrong
//         let classToApply = "incorrect";
//         if (selectAnswer == currentQuestion.answer) {
//             classToApply = "correct";
//         }
//         // console.log(classToApply); <- used to catch the syntax error of above & to test if it was logging 'correct'/'true' || 'incorrect'/'false'
//         if (classToApply == "correct") {
//             incrementScore(CORRECT_BONUS);
//         }
//         //  penalizes player if they get the question wrong by 5 seconds
//         if (classToApply == "incorrect") {
//             timerCount -= 5;
//         }

//         selectChoice.parentElement.classList.add(classToApply);
//         // .add is how to add classes in javascript
//         setTimeout(() => {
//             selectChoice.parentElement.classList.remove(classToApply);
//             // .remove to remove class in javascript
//             getNewQuestion();
//         }, 1000);

//         console.log(selectAnswer == currentQuestion.answer);
//         // checks if the selected answer was the 'right' one
//     });
// });

// incrementScore = (num) => {
//     score += num;
//     scoreText.innerText = score;
// };

// // helps w visual of timer
// function convertSeconds(s) {
//     var min = Math.floor(s / 60);
//     var sec = s % 60;
//     return min + ":" + sec;
// }