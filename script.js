function computerPlay(){
    return choice = Math.floor(Math.random()*3);
}

function getPlayerChoice(){
    let playerInput = prompt("Choose Rock, Paper or Scissors!")
    return playerInput.toLowerCase();
}

function convertChoiceToInt() {
    let playerChoice = getPlayerChoice();
    if (playerChoice === "rock") {
        let playerComp = 0; 
    } else if (playerChoice === "paper") {
        let playerComp = 1;
    } else if (playerChoice === "paper") {
        let playerComp = 2;
    } else {
        alert("you didn't type in a valid options, try again!")
        return convertChoiceToInt()
    }
    return playerComp
}

