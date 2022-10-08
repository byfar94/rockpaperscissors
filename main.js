let playerScore = 0;
let computerScore = 0;



function getComputerChoice(){
   let randomNum = Math.floor(Math.random() * 3) + 1;
     if (randomNum == 1) {
       return greeting = "rock";
    } else if (randomNum == 2) {
        return greeting = "paper";
    } else (randomNum == 3) 
        return greeting = "scissors";
    
}


function playerChoice(){
    let playerPick = prompt("type rock, paper, or scissors");
    let sensePick = (playerPick.toLowerCase());
    return sensePick
} 


function playRound(computerSelection, playerSelection){
    if (computerSelection === playerSelection) {
        return "tie";
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        ++playerScore;
        return "you win";
    } else if (computerSelection === "rock" && playerSelection ==="scissors") {
        ++computerScore;
        return "you lose";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        ++computerScore;
        return "you lose";
    } else if (computerSelection === "paper" && playerSelection  === "scissors") {
        ++playerScore;
        return "you win";
    } else if (computerSelection === "scissors" && playerSelection  === "rock") {
        ++playerScore;
        return "you win";
    } else (computerSelection === "scissors" && playerSelection === "paper"); {
        ++computerScore;
        return "you lose";
    }
    
}

function game(){
    console.log("welcome to rock, paper, scissors!");
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = playerChoice();
        console.log(playRound(computerSelection, playerSelection))
    }
}

game()

function checkWinner(computerSelection, playerSelection){
    if (computerScore < playerScore){
        return "player wins the game!"
    }
    else if (computerScore > playerScore){
        return "computer wins the game!"
    }
    else {
        return "tie game"
    }
} 


console.log(playerScore);
console.log(computerScore);
console.log(checkWinner())