//array created with 3 possible choices in rock, papper, scissor this will be used to generate a random computer choices (noted below in getComputerChoice)
let choices = ["rock","paper","scissors"];

//empty array that we will fill up later so that we can add the winner of each round to it (winAr.push in the playRound function) and see who has the most wins at the end (logTheWinner function).
let winAr= [];

//play 5 rounds. Will loop to execute playRound 5 times then at the end it will execute logTheWinner funciton.
function game(){
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    logTheWinner(); // needed to have logwinner outside of loop so its doesnt go each time
    console.log(logTheWinner());
}

//will execute the checkWinner function using computerSelection and playerSelection parameters, will push the "winner" (e.g. the "player", "computer", or "tie") to the Array winAr
function playRound(){
    let computerSelection = getComputerChoice();
    let playerSelection = playerChoice();
    const winner = checkWinner(computerSelection, playerSelection);
    winAr.push(winner);
    
    console.log(`player: ${playerSelection}`);
    console.log(`computer: ${computerSelection}`);
    console.log(winner);
}   

//randomly generates a number from 0 - .99 with Math.random and multiplys that by choices.length (3) which give a number betwen 0 - 2.97. Then round down using math.floor which will give 0, 1, or 2. This is done to index the array using [] which can be will return "rock" for choices[0] and so on. 
function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
 }
 
 function playerChoice(){
     let playerPick = prompt("rock, paper, or scissors");
     let sensePick = playerPick.toLowerCase();
     return sensePick;
 } 
 

//Check winner and return player, computer, or tie
function checkWinner(computerSelection, playerSelection){
    if (computerSelection === playerSelection) {
        return "tie";
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return "player";
    } else if (computerSelection === "rock" && playerSelection ==="scissors") {
        return "computer";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
       return "computer";
    } else if (computerSelection === "paper" && playerSelection  === "scissors") {
      return "player";
    } else if (computerSelection === "scissors" && playerSelection  === "rock") {
        return "player";
    } else (computerSelection === "scissors" && playerSelection === "paper"); {
      return "computer";
    }   
}


//filter function is lopping over the winAr and creating a new function based on the other function we use within it here it is saying if the item = "player" it will be added to the new array. The same is done with Computer. if player gets added 3 times and computer is added twice the array lenght of playerWins will be 3 and the computerWins will be 2. We can use this to figure out who has the most wins and is the ultimate winner of the game based on the if, else statement below. This if, else statment needs to be done inside the function because the playerWins and ComputerWins are defined within the function logTheWinner. 

function logTheWinner() {
    let playerWins = winAr.filter((item) => item == "player").length;
    let computerWins = winAr.filter((item) => item == "computer").length;
    console.log(playerWins);
    console.log(computerWins);
    if (playerWins > computerWins){
        return "Player Wins";
    } else if (playerWins > computerWins) {
        return "Computer Wins";
    } else {
        return "Tie"
    }
}

let theButton = document.querySelector("#da-button");
theButton.addEventListener("click", function (){
   game();
})