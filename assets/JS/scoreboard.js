// DEFINE HOME AND CLEAR BUTTONS
var homeBtn = document.getElementById('home-btn');
var clearBtn = document.getElementById('clear-scores');

// IDENTIFY THE SCORE LIST CONTAINER (ul) AND PULL SAVED INITIALS/SCORE FROM LOCAL STORAGE
// ADD THE RECENTLY RETRIEVED SCORE TO THE LIST BY CREATING A NEW LI
var scoreList = document.getElementById('score-list');


// THEN APPEND TO PAGE... USE 'APPENDCHILD' B/C <li> IS CHILD ELEMENT OF <ul>
function addScore () {

// CHECK TO SEE IF IT SAVES TO LOCAL STORAGE
var userInitialsEl = localStorage.getItem('userInitials');
var finalScoreEl = localStorage.getItem('finalScore');

console.log(userInitialsEl);
console.log(finalScoreEl);


var recentScoreEl = document.createElement('dt');
recentScoreEl.textContent = 'userInitialsEl' + 'finalScoreEl';

    scoreList.appendChild(recentScoreEl);
}