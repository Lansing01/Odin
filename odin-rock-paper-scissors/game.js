//Init
const WINNERS = {
    "rock" : "scissors",
    "paper" : "rock",
    "scissors" : "paper"
}
let playerScore = 0
let computerScore = 0

//Functions get choices
function getPlayerPick() {
    return window.prompt("Rock, paper, scissors ?").toLowerCase()
}

function getComputerPick() {
    let pick = Math.floor(Math.random() * 3);
    switch(pick) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

//Function play one round 
function playRound() {
let playerChoice = getPlayerPick();
console.log(playerChoice)  
let computerChoice = getComputerPick();
console.log(computerChoice)
    if (WINNERS[playerChoice] === computerChoice) {
        window.alert("You won !");
        ++playerScore;
        return;
    }
    else if (playerChoice === computerChoice) {
        window.alert("It's a draw !");
        return;
    }
    else {
        window.alert("The computer won !");
        ++computerScore;
        return;
    }
}

//Function play a game
function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore) {
        return window.alert("GAME OVER You bested the computer !");
    }
    else if (computerScore > playerScore) {
        return window.alert("GAME OVER The computer bested you, better luck next time !");
    }
    else {
        return window.alert("GAME OVER It's a tie");
    }
}

//Plays the game
playGame()