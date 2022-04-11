let playerSelection;
let computerSelection;

function computerPlay() {
    return Math.floor(Math.random() * 3);
}

console.log(computerPlay());

function playerPlay() {
    playerSelection = prompt("Enter rock, paper or scissors:").toLowerCase();
    switch (playerSelection) {
        case "paper":
            return 0;
            break;

        case "rock":
            return 1;
            break;

        case "scissors":
            return 2;
            break;

        default:
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
        computerSelection = computerPlay();
        playerSelection = playerPlay();
        playRound(playerSelection, computerSelection);
    }
}

game();