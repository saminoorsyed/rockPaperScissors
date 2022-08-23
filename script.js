const panels = document.querySelectorAll('.panel');
const player = document.querySelector('.you');
const comp = document.querySelector('.computer');
const winPanel = document.querySelector('.win-panel');
const title = document.querySelector('.game');
const scoreboard = document.querySelector('.scoreboard')

let playerScore = 0;
let compScore = 0;
let p = document.createElement('p');
let p2 = document.createElement('p')
let playerWon = true;
let choice;
let winner;
let congratulations;

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

function moveDivs (){
    panels.forEach(panel => panel.classList.toggle('loser'));
    title.classList.toggle('intermission');
    scoreboard.classList.toggle('loser');
    // adds the image to the center panel
    winPanel.classList.toggle(winner.toLowerCase());
}

function growWinDiv(){
    
    // grows the div
    winPanel.classList.toggle('winner-active');
    // shrinks the div
    winPanel.classList.toggle('winner-hidden');
}

function addWinText(){
    // adjust text based on winner
    if (winner === 'tie'){
        p.textContent = "It's a tie!";
        p2.textContent = `${congratulations}`;
    }else {
        p.textContent = `${congratulations}`;
        p2.textContent = `${winner} beats ${loser}.`;
    }
    winPanel.appendChild(p);
    winPanel.appendChild(p2);
}

function flyUp(){
    winPanel.classList.add('fly-up');
}

function removeWinText(){
    winPanel.removeChild(p);
    winPanel.removeChild(p2);
}

function displayWinner(){
    moveDivs();
    setTimeout(growWinDiv, 500);
    setTimeout(addWinText, 1200);
    setTimeout(growWinDiv, 4000);
    setTimeout(removeWinText, 4000);
    setTimeout(moveDivs, 5500);
}

function endGame(){

}
function game(){
    const playerChoice = parseInt(this.dataset.choice);
    const compChoice = compPlay();
    if (playerScore+compScore === 5){
        if (playerScore > compScore){
            congratulations = "the tiger didn't eat you... this time";
            winner = 'You';
            playerScore = 0;
            compScore = 0;
        }else {
            congratulations = 'The Tiger ate you';
            winner = 'Tiger';
            playerScore = 0;
            compScore = 0;
        }
    }else if (playerChoice === 0 && compChoice === 2){
        playerWon = true;
        adjustScore();
        congratulations = 'You beat the Tiger!'
        winner = 'Rock'
        loser = 'scissors'
        displayWinner();
    } else if (playerChoice === 2 && compChoice === 1){
        playerWon = true;
        adjustScore();
        congratulations = 'You beat the Tiger!'
        winner = 'Scissors'
        loser = 'paper'
        displayWinner();
    }else if (playerChoice === 1 && compChoice === 0){
        playerWon = true;
        adjustScore();
        congratulations = 'You beat the Tiger!'
        winner = 'Paper'
        loser = 'rock'
        displayWinner();
    }else if (playerChoice === 2 && compChoice === 0){
        playerWon = false;
        adjustScore();
        congratulations = 'The Tiger beat You!'
        winner = 'Rock'
        loser = 'scissors'
        displayWinner();
    }else if (playerChoice === 0 && compChoice === 1){
        playerWon = false;
        adjustScore();
        congratulations = 'The Tiger beat You!'
        winner = 'Paper'
        loser = 'rock'
        displayWinner();
    }else if (playerChoice === 1 && compChoice === 2){
        playerWon = false;
        adjustScore();
        congratulations = 'The Tiger beat You!'
        winner = 'Scissors'
        loser = 'paper'
        displayWinner();
    }else if (playerChoice === compChoice){
        winner = 'tie';
        congratulations = 'The Tiger gets bored when he ties.';
        displayWinner();
    }
}

panels.forEach(choice => choice.addEventListener('click', game));