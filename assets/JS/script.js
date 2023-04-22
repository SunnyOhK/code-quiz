// DEFINE GLOBAL VARIABLES FOR HOME PAGE AND HIDE/SHOW
var startBtn = document.querySelector('.btn-start');
var homePage = document.querySelector('.home');
var quizPage = document.querySelector('.qna-page');
var hideEl = document.querySelector('.show');
var showEl = document.querySelector('.hide');
var choiceBtn = document.body.querySelector('.choice-btn');
var submitBtn = document.querySelector('.submit-btn');
var submitScorePage = document.getElementById('submit-score');
var hsPage = document.getElementById('hs-page');
var initialsBoxEl = document.getElementById('initials-form');

// DEFINE THE INITIALS INPUT FIELD AT THE GLOBAL LEVEL TO BE CALLED IN FUNCTION
// var formEl = document.getElementById('initials-form');

// REMOVED Q&A FROM .JSON AND PUT INTO JS VARIABLE []
var questionsIndex = 0;
var score;

// SET STARTING POINT FOR TIMER
var time;
var secondsLeft;
var questionsCounter = 0;
var quizHasEnded = true;  //boolean for question and time functions to stop

// DEFINE QUESTIONS AND CHOICES ARRAY
var questionsList = {
    questions: [
        "Which of the following is a function of the elephant's trunk?",
        "On which continent is the elephant not native/ found in the wild?",
        "Which of the following is the largest living elephant species?",
        "How much does a baby elephant normally weigh at birth?",
        "Which of the following poses the greatest threat to elephants' survival?",
        "Which of the following is a common (true) claim about elephants?"
    ],
    choices: [
        ["To suck up water for drinking and cooling", "To use as a snorkel", "To grab items that are too large to inhale", "To communicate (trumpet warnings and greet one another)", "correct:All are true"],
        ["correct:South America", "Africa", "Asia", "Elephants are native to all 3 of these continents", "Elephants are not native to any of these continents"],
        ["Asian", "correct:African Savanna", "African Forest", "Woolly Mammoth", "Mr. Snuffleupagus"],
        ["100 - 150 lbs", "correct:200 - 250 lbs", "300 - 350 lbs", "400 - 450 lbs", "up to 800 lbs depending on the species"],
        ["Large feline predators (ex. lions)", "Declining birth rates", "correct:Humans (poaching and habitat destruction)", "Mudslides", "Elephant populations are not declining"],
        ["Elephants are afraid of mice", "Elephants have the sharpest eyesight in the animal kingdom", "Elephants love performing in the circus", "An elephant a day keeps the doctor away", "correct:An elephant never forgets"]
    ]
}

function isQuizOver() {
    if (secondsLeft < 1 || currentQuestionIndex === questionsList.questions.length) {
        return true
    }
    return false
}

// MAKE SURE QUESTIONS START AT BEGINNING AND GO THROUGH DESIGNATED ARRAY ONCE
var currentQuestionIndex;  //this will start questions at the beginning
var availableQuestions = [];
let currentQuestion = '';
var finalQuestion;
var choiceValue;

function startGame() {
    quizHasEnded = false;
    currentQuestionIndex = 0;
    secondsLeft = 90;
    startTimer();

    // Switch page views by changing classes for homepage and questions page
    homePage.className = 'hide';
    quizPage.className = 'show';

    getQuestion();
};

function startTimer() {
    var timerEl = document.querySelector('.timer');
    time = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;
        if (isQuizOver()) {
            // Stops execution of action at set interval.
            clearInterval(time);
            endQuiz();
            return;
        }
    }, 1000);
}

function getQuestion() {
    var questionEl = document.querySelector('.question');
    questionEl.textContent = questionsList.questions[currentQuestionIndex];
    getChoices();
};


function getChoices() {
    var choiceBtnList = document.querySelector('ul');
    choiceBtnList.innerHTML = '';
    for (let choiceIndex = 0; choiceIndex < questionsList.choices[currentQuestionIndex].length; choiceIndex++) {
        var choiceBtn = document.createElement('li');
        var adjString = questionsList.choices[currentQuestionIndex][choiceIndex];

        if (questionsList.choices[currentQuestionIndex][choiceIndex].includes('correct:')) {
            choiceBtn.setAttribute("id", "correct")
            adjString = questionsList.choices[currentQuestionIndex][choiceIndex].substring(8, questionsList.choices[currentQuestionIndex][choiceIndex].length);
        }
        choiceBtn.textContent = adjString;
        choiceBtn.addEventListener("click", checkAnswer)
        choiceBtnList.appendChild(choiceBtn);
    }
}


function checkAnswer(event) {
    var feedbackTextBox = document.getElementById('right-wrong');
    console.log(event)
    console.log(event.target)
    if (event.target.id != "correct") {
        console.log("incorrect")
        feedbackTextBox.textContent = 'Oooh... Incorrect!';
        secondsLeft -= 10;

    } else {
        console.log("correct");
        feedbackTextBox.textContent = 'You are correct!';
    }
    if (isQuizOver()) {
        endQuiz()
        return
    }
    currentQuestionIndex++
    getQuestion()
}


function endQuiz() {
    quizPage.className = 'hide';
    submitScorePage.className = 'show';

    var score = document.getElementById('score-display');
    score.textContent = secondsLeft;
    console.log(score);

    saveScore();
}

function saveScore() {
    initialsBoxEl.addEventListener('submit', function (event) {
        event.preventDefault();
    
    var initialsEl = document.getElementById('enter-initials');
    var userInitials = initialsEl.value.trim();
    var finalScoreEl = document.getElementById('score-display');
    var finalScore = parseInt(finalScoreEl.textContent);
    
    // THEN CALL THE FUNCTION THAT CHECKS AND SAVES THE ACTUAL USER INPUT
        if (userInitials === '') {
            alert('Please enter your initials.');
            return;
        }

         // CREATE A KEY 'USERINITIALS' AS A UNIQUE IDENTIFIER FOR SAVED INPUT
        localStorage.setItem('userInitials', userInitials);
        localStorage.setItem('finalScore', finalScore);

        window.location.href = 'scoreboard.html';
        }
    )};


// ADD EVENT LISTENERS FOR PAGE NAVIGATION BUTTONS
startBtn.addEventListener('click', startGame);