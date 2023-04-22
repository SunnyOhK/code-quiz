// DEFINE HOME AND CLEAR BUTTONS
var homeBtn = document.getElementById('home-btn');
var clearBtn = document.getElementById('clear-scores');

// IDENTIFY THE SCORE LIST CONTAINER (ul) AND PULL SAVED INITIALS/SCORE FROM LOCAL STORAGE
// ADD THE RECENTLY RETRIEVED SCORE TO THE LIST BY CREATING A NEW LI
var scoreList = document.getElementById('score-list');


// THEN APPEND TO PAGE... USE 'APPENDCHILD' B/C <li> IS CHILD ELEMENT OF <ul>
function addScore () {

var lastInitials = localStorage.getItem('userInitials');
var recentScoreEl = document.createElement('li');

// ! CANNOT GET THE TEXT ONTO THE PAGE. APPLICATION TAB SHOWS KEY: USERINITIALS VALUE: SBO
    recentScoreEl.textContent = lastInitials.value;
    scoreList.appendChild(recentScoreEl);
}