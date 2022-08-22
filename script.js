const panels = document.querySelectorAll('.panel');
const player = document.querySelector('.you');
const comp = document.querySelector('.computer');

let playerScore = 0;
let compScore = 0;
let p = document.createElement('p');
let playerWon = true;
let choice;

function compPlay(){
    return Math.floor(Math.random()*3);
}

function adjustScore(){
    if (playerWon) {
        playerScore++;
        player.textContent = playerScore;
    }else {
        compScore++;
        comp.textContent = compScore;
    }
}

function displayWinner(){
    panels.forEach(panel => panel.classList.add('loser'));
        setTimeout(()=> {
            panels.forEach(panel => panel.classList.remove('loser'));
        },2000)

}
function game(){
    const playerChoice = parseInt(this.dataset.choice);
    const compChoice = compPlay()
    console.log(compChoice);
    console.log(playerChoice);
    choice = this;
    if (playerChoice === 0 && compChoice === 2){
        console.log("You won! Rock beats Scissors");
        playerWon = true;
        adjustScore();
        winner = 'rock'
        displayWinner();
    } else if (playerChoice === 2 && compChoice === 1){
        console.log("You won! Scissors beats Paper");
        playerWon = true;
        adjustScore();
        winner = 'scissors'
        displayWinner();
    }else if (playerChoice === 1 && compChoice === 0){
        console.log("You won! Paper beats Rock");
        playerWon = true;
        adjustScore();
        winner = 'paper'
        displayWinner();
    }else if (playerChoice === 2 && compChoice === 0){
        console.log("You lost! Rock beats Scissors");
        playerWon = false;
        adjustScore();
        winner = 'rock'
        displayWinner();
    }else if (playerChoice === 0 && compChoice === 1){
        console.log("You lost! paper beats rock");
        playerWon = false;
        adjustScore();
        winner = 'paper'
        displayWinner();
    }else if (playerChoice === 1 && compChoice === 2){
        console.log("You lost! scissors beats paper");
        playerWon = false;
        adjustScore();
        winner = 'scissors'
        displayWinner();
    }else if (playerChoice === compChoice){
        console.log("It's a tie! choose again!");
    }
}

panels.forEach(choice => choice.addEventListener('click', game));