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
    if (playerSelection == computerSelection) {
        alert("Tie!")
    } else switch (playerSelection) {
        case "paper":
            if (computerSelection == "rock") {
                playerWins++;
                alert("You win! Paper beats rock.");
            } else {
                computerWins++;
                alert("You lose! Scissors beats paper.");
            }
            break;

        case "rock":
            if (computerSelection == "paper") {
                computerWins++;
                alert("You lose! Paper beats rock.")
            } else {
                playerWins++;
                alert("You win! Rock beats scissors.")
            }
            break;

        case "scissors":
            if (computerSelection == "paper") {
                playerWins++;
                alert("You win! Scissors beats paper.");
            } else {
                computerWins++;
                alert("You lose! Rock beats scissors.");
            }
            break;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = playerPlay();
        playRound(playerSelection, computerSelection);
    }
}

game();