const panels = document.querySelectorAll('.panel');



function computerPlay(){
    return Math.floor(Math.random()*3);
}

function convertChoiceToInt(choice) {
    if (choice === "rock") {
        return 0; 
    } else if (choice === "paper") {
        return 1;
    } else{
        return 2;
    } 
}

function PlayRPC(choice){
    const playerChoice = convertChoiceToInt(choice)
    const computerChoice = computerPlay()
    console.log(computerChoice)
    console.log(playerChoice)
    if (playerChoice === 0 && computerChoice === 2){

        alert("You won! Rock beats Scissors")
        return 1
    } else if (playerChoice === 2 && computerChoice === 1){
        alert("You won! Scissors beats Paper")
        return 1
    }else if (playerChoice === 1 && computerChoice === 0){
        alert("You won! Paper beats Rock")
        return 1
    }else if (playerChoice === 0 && computerChoice === 1){
        alert("You lost! Rock beats Scissors")
        return 0
    }else if (playerChoice === 1 && computerChoice === 2){
        alert("You lost! Rock beats Scissors")
        return 0
    }else if (playerChoice === 2 && computerChoice === 1){
        alert("You lost! Rock beats Scissors")
        return 0
    }else if (playerChoice === computerChoice){
        alert("It's a tie! play again!")
        PlayRPC()
    }
}

function game(){
    console.log('ran')
    let result;
    let playerTally = 0;
    let computerTally = 0;
    for (let i = 0; i <5; i++) {
        const choice = this.dataset.choice;
        result = PlayRPC(choice)
        if (result === 1) {
            playerTally++    
        }else{
            computerTally++
        }
    }
    if (playerTally> computerTally) {
        alert(`You won ${playerTally} of the 5 rounds`)
    }else {
        alert(`The computer won ${computerTally} of the 5 rounds`)
    }
}


panels.forEach(choice => choice.addEventListener('click', game));