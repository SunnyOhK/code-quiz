// Select timer element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 61;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            // Stops execution of action at set interval.
            clearInterval(timerInterval);
            // Calls function to create and send 'game over' message
            sendMessage();
        }

    }, 1000);
}

function sendMessage() {
    timeEl.textContent = "Game over!";
}

setTime();