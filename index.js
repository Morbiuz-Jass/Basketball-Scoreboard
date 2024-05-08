
// these code for homescore
let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let homeScoreEl = document.getElementById("home-score");
let homeScore = 0 

function increaseHomeScoreOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

let homeScoreBtnTwo = document.getElementById("home-score-btn-2");

function increaseHomeScoreTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

let homeScoreBtnThree = document.getElementById("home-score-btn-3"); 

function increaseHomeScoreThree() {
    homeScore += 3 
    homeScoreEl.textContent = homeScore
}

// this one for guestscore
let guestScoreBtnOne = document.getElementById("guest-score-btn-1");
let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0 

function increaseGuestScoreOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

let guestScoreBtnTwo = document.getElementById("guest-score-btn-1");

function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
let guestScoreBtnThree = document.getElementById("guest-score-btn-3");

function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

// I think my code is very DRY but for now it a bit difficult to change anything


// this additional function for reset btn
let resetBtn = document.getElementById("reset-scoreboard");
resetBtn.addEventListener("click", resetScores);

function resetScores() {
    homeScore = 0; 
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}

