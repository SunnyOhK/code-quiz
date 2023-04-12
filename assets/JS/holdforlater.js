// question code quiz, questions displayed dynamically
// when OfflineAudioCompletionEvent, score is shown and redirect to highscores history

// function to start quiz
// function to display questions and answers (loops, iterators)
// function to check correct answers 
// function to stop timer redirect to a new page

// VAriables
// score, questions, question answerChoicesA, question answers
    // var score = num | var questions = [{}, {}, {}]
    // question{question: "",
    //          answer: "",
    //              choices: ["", "", ""]
    //                 }

// User is presented with a single question, user chooses an answer from radio buttons, answer is checked, if correct give 1 point by ++
//  Loop through the questions arr to append each question to the page (outer for loop to loop through questions + inner for loop to loop through the answer choices)
//          OR

// var iterator = 0;  (this would grab the next question in line)
    // for loop that appends choices to the page
    // question[0]
    // questions[0].question --> append questions to the page
        //inside of a for loop
        // questions[0].choices[i] --> append answers to the page
    // if statement that checks for user input and compares to questions[0].answer if correct score++, iterator++, affect timer
    // if incorrect, subtract from the timer, iterator++
    // Clear the page, append new question
    // validate answers when radio buttons are clicked to determine true or false
        // how to determine which button is selected --> use jQuery --> if( $('#radio').is(':checked') ){}

// TIMER : DECLARE THIS GLOBALLY
// var timeLeft = 90;
// setInterval(timeTick, 1000);
// function timeTick(){
//     timeLeft--;
//     timer.text = timeLeft

//     if(timeLeft <=0){
//         endQuiz();
//     if(endQuizBtn = clicked){
//             stopTimer();
// }
//     }
// }

!! renderNextQuestion() !!


// {
//         question: "Which of the following is a function of the elephant's trunk?",
//         answers: {
//             a: "To suck up water for drinking and cooling",
//             b: "To use as a snorkel",
//             c: "To grab items that are too large to inhale",
//             d: "To communicate (trumpet warnings and greet one another)",
//             e: "All are true",
//         },
//         correctAnswer: "e"
//     },
//     {
//         question: "On which continent is the elephant not native/ found in the wild?",
//         answers: {
//             a: "South America",
//             b: "Africa",
//             c: "Asia",
//             d: "Elephants are native to all 3 continents",
//             e: "Elephants are not native to any of these continents",
//         },
//         correctAnswer: "a"
//     },
    // {
    //     question: "Which of the following is the largest living elephant species?",
    //     answers: {
    //         a: "Asian",
    //         b: "African Savanna",
    //         c: "African Forest",
    //         d: "Woolly Mammoth",
    //         e: "Mr. Snuffleupagus",
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     question: "How much does a baby elephant normally weigh at birth?",
    //     answers: {
    //         a: "100 - 150 lbs",
    //         b: "200 - 250 lbs",
    //         c: "300 - 350 lbs",
    //         d: "400 - 500 lbs",
    //         e: "up to 800 lbs depending on the species",
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     question: "Which of the following poses the greatest threat to elephants' survival?",
    //     answers: {
    //         a: "Large feline predators (ex. lions)",
    //         b: "Declining birth rates",
    //         c: "Humans (poaching and habitat destruction)",
    //         d: "Mudslides",
    //         e: "Elephant populations are not declining",
    //     },
    //     correctAnswer: "c"
    // },
    // {
    //     question: "Which of the following is a common (true) claim about elephants?",
    //     answers: {
    //         a: "Elephants are afraid of mice",
    //         b: "Elephants have the sharpest eyesight in the animal kingdom",
    //         c: "Elephants love performing in the circus",
    //         d: "An elephant a day keeps the doctor away",
    //         e: "An elephant never forgets",
    //     },
    //     correctAnswer: "e"
    // },


USE THIS: 
    // Immediately hide the clear button
    clearEl.hide();

// Create button
var letterBtn = $('<button>');
// Assign style to the button
letterBtn.addClass('letter-button btn btn-info');
// Assign the letter to the data-letter attribute
letterBtn.attr('data-letter', letters[i]);

// answers populate on buttons, .forEach loop
currentQuestion.answers.forEach(function (answer, i) {
    var answerButton = document.createElement("button");
    answerButton.setAttribute("class", "answer");
    answerButton.setAttribute("value", answer);
    // i+1 to show numbers 1-4 since array starts at 0.
    answerButton.textContent = i + 1 + ". " + answer;

    // answers and events for answers
    answerButton.onclick = chooseAnswer;
    answersEl.appendChild(answerButton);

// FROM THE CLASS CHAT
    // answers and events for answers
    answerButton.onclick = chooseAnswer;
    answersEl.appendChild(answerButton);

    // clear old stuff
    answersEl.textContent = "";
    // clearout at the beginning of my getQuestion function

    // BUTTON VARIABLES BY ID
    var btnStartE1 = document.querySelector("#start-game");
    var btnSubmitE1 = document.querySelector("#submit-answer");
    var btnSkipE1 = document.querySelector("#skip-question");
    var btnClearE1 = document.querySelector("#clear-score");


// var answerAEl = document.getElementById("Answer 1");
// var answerBEl = document.getElementById("Answer 2");
// var answerCEl = document.getElementById("Answer 3");
// var answerDEl = document.getElementById("Answer 4");
// var answerEEl = document.getElementById("Answer 5");