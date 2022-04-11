function computerPlay() {
    let input = Math.floor(Math.random() * 3);
    switch (input) {
        case 0:
            return "paper";
            break;
        
        case 1:
            return "rock";
            break;

        case 2:
            return "scissors";
            break;
    }
}

function playerPlay() {
    let input = prompt("Enter rock, paper or scissors:").toLowerCase();
    if (input == "rock" || input == "paper" || input == "scissors") {
        return input;
    } else {
        alert("Invalid input!");
        playerPlay();
    }
}

let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {

}

function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = playerPlay();
        playRound(playerSelection, computerSelection);
    }
}

game();