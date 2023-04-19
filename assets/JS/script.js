// DEFINE GLOBAL VARIABLES FOR HOME PAGE AND HIDE/SHOW
var startBtn = document.querySelector('.btn-start');
var homePage = document.querySelector('.home');
var quizPage = document.querySelector('.qna-page');
var hideEl = document.querySelector('.show');
var showEl = document.querySelector('.hide');
var submitBtn = document.querySelector('.submit-btn');
var choiceBtn = document.getElementsByClassName('choice-btn');

// DEFINE Q&A PAGE VARIABLES
var timerEl = document.querySelector('.timer');
var questionEl = document.querySelector('.question');
var choice1El = document.querySelector('#choice1');
var choice2El = document.querySelector('#choice2');
var choice3El = document.querySelector('#choice3');
var choice4El = document.querySelector('#choice4');
var choice5El = document.querySelector('#choice5');
var textCorrect = document.querySelector('#correct');
var textWrong = document.querySelector('#wrong');
var submitScorePage = document.querySelector('#submit-score');


// REMOVED Q&A FROM .JSON AND PUT INTO JS VARIABLE []
var questionsIndex = 0;
var score = 0;

// SET STARTING POINT FOR TIMER
var time;
var secondsLeft;
var questionsCounter = 0;

// DEFINE QUESTIONS AND CHOICES ARRAY
var questionsArray = [
    {
        question: "Which of the following is a function of the elephant's trunk?",
        c1: "To suck up water for drinking and cooling",
        c2: "To use as a snorkel",
        c3: "To grab items that are too large to inhale",
        c4: "To communicate (trumpet warnings and greet one another)",
        c5: "All are true",
        answer: 5
    },
    {
        question: "On which continent is the elephant not native/ found in the wild?",
        c1: "South America",
        c2: "Africa",
        c3: "Asia",
        c4: "Elephants are native to all 3 of these continents",
        c5: "Elephants are not native to any of these continents",
        answer: 1
    },
    {
        question: "Which of the following is the largest living elephant species?",
        c1: "Asian",
        c2: "African Savanna",
        c3: "African Forest",
        c4: "Woolly Mammoth",
        c5: "Mr. Snuffleupagus",
        answer: 2
    },
    {
        question: "How much does a baby elephant normally weigh at birth?",
        c1: "100 - 150 lbs",
        c2: "200 - 250 lbs",
        c3: "300 - 350 lbs",
        c4: "400 - 450 lbs",
        c5: "up to 800 lbs depending on the species",
        answer: 2
    },
    {
        question: "Which of the following poses the greatest threat to elephants' survival?",
        c1: "Large feline predators (ex. lions)",
        c2: "Declining birth rates",
        c3: "Humans (poaching and habitat destruction)",
        c4: "Mudslides",
        c5: "Elephant populations are not declining",
        answer: 3
    },
    {
        question: "Which of the following is a common (true) claim about elephants?",
        c1: "Elephants are afraid of mice",
        c2: "Elephants have the sharpest eyesight in the animal kingdom",
        c3: "Elephants love performing in the circus",
        c4: "An elephant a day keeps the doctor away",
        c5: "An elephant never forgets",
        answer: 5
    }
]

// MAKE SURE QUESTIONS START AT BEGINNING AND GO THROUGH DESIGNATED ARRAY ONCE
var currentQuestionIndex = 0;
var availableQuestions = [];
let currentQuestion = '';
let currentC1 = '';
let currentC2 = '';
let currentC3 = '';
let currentC4 = '';
let currentC5 = '';
var finalQuestion;
var choiceValue;

function startGame() {
    secondsLeft = 90;
    startTimer();

    // Switch page views by changing classes for homepage and questions page
    homePage.className = 'hide';
    quizPage.className = 'show';

    // Starting point for delivering questions
    availableQuestions = [...questionsArray];
    getQuestion();
};

function startTimer() {
    time = setInterval (function() {
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval.
            clearInterval(time)
            endQuiz();
        }
    }, 1000);
}

function getQuestion() {

// MAKE SURE ANSWER CHECK TEXT HAS RESET AT THE START OF EACH QUESTION

    currentQuestion = questionsArray[currentQuestionIndex].question;
    questionEl.textContent = currentQuestion;

    currentC1 = questionsArray[currentQuestionIndex].c1;
    choice1El.textContent = currentC1;

    currentC2 = questionsArray[currentQuestionIndex].c2;
    choice2El.textContent = currentC2;

    currentC3 = questionsArray[currentQuestionIndex].c3;
    choice3El.textContent = currentC3;

    currentC4 = questionsArray[currentQuestionIndex].c4;
    choice4El.textContent = currentC4;

    currentC5 = questionsArray[currentQuestionIndex].c5;
    choice5El.textContent = currentC5;

    return;
};


// function checkAnswer() {

//     // if (choiceValue == questionsArray[currentQuestionIndex].answer) {
//     //     textCorrect.className = 'show';

//     // } else {
//     //     textWrong.className = 'show';
//     // }


//     // MOVE TO NEXT QUESTION AFTER SHORT DELAY FOR MESSAGE TO BE READ
//     // currentQuestionIndex++;
//     // setTimeout(getQuestion, 1500);
//     getQuestion();
// };

function endQuiz() {
    quizPage.className = 'hide';
    submitScorePage.className = 'show';
}

function saveScore() {

}

// ADD EVENT LISTENERS FOR PAGE NAVIGATION BUTTONS
startBtn.addEventListener('click', startGame);
choiceBtn.addEventListener('click', getQuestion);
submitBtn.addEventListener('click', saveScore);

// if (availableQuestions.length == 0 || secondsLeft == 0) {
//     endQuiz();
// }