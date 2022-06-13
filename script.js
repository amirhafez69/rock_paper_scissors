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

let playerWins = 0;
let computerWins = 0;
let gameRound = 0;
const result = document.querySelector('.result');
function roundReport(gameRound, report, playerWins, computerWins) {
    const list = document.createElement('li');
    if (gameRound < 5) {
        list.textContent = `Round ${gameRound + 1}: ${report} Your wins = ${playerWins}, My wins = ${computerWins}`;
    } else {
        list.textContent = 'Final result: ' + report;
    }
    result.appendChild(list);
}
function playRound(playerSelection, computerSelection) {
    if (gameRound < 5) {
        if (playerSelection == computerSelection) {
            roundReport(gameRound, 'Tie!', playerWins, computerWins);
            gameRound++;
        } else switch (playerSelection) {
            case "paper":
                if (computerSelection == "rock") {
                    playerWins++;
                    roundReport(gameRound, 'You win! Paper beats rock.', playerWins, computerWins);
                } else {
                    computerWins++;
                    roundReport(gameRound, 'You lose! Scissors beats paper.', playerWins, computerWins);
                }
                gameRound++;
                break;
    
            case "rock":
                if (computerSelection == "paper") {
                    computerWins++;
                    roundReport(gameRound, 'You lose! Paper beats rock.', playerWins, computerWins);
                } else {
                    playerWins++;
                    roundReport(gameRound, 'You win! Rock beats scissors.', playerWins, computerWins);
                }
                gameRound++;
                break;
    
            case "scissors":
                if (computerSelection == "paper") {
                    playerWins++;
                    roundReport(gameRound, 'You win! Scissors beats paper.', playerWins, computerWins);
                } else {
                    computerWins++;
                    roundReport(gameRound, 'You lose! Rock beats scissors.', playerWins, computerWins);
                }
                gameRound++;
                break;
        }
    }
    if (gameRound == 5) {
        (playerWins == computerWins) ? roundReport(gameRound, 'Tie! No final winner.', playerWins, computerWins) :
        (playerWins > computerWins) ? roundReport(gameRound, 'You won!', playerWins, computerWins) :
        roundReport(gameRound, 'You lost!', playerWins, computerWins);
        gameRound++;
    }
}

function getInput(e) {
    if (e.target.id) playRound(e.target.id, computerPlay());
}
window.addEventListener('click', getInput);

function playSound(e) {
    const audio = document.querySelector(`audio[data-button="${e.target.id}"]`);
    if (audio) {
        audio.play();
        audio.currentTime = 0;
    }
    const button = document.querySelector(`button[id="${e.target.id}"]`);
    if (button) button.classList.add('playing');
}
window.addEventListener('click', playSound);

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));