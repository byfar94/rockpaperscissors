//array created with 3 possible choices in rock, papper, scissor this will be used to generate a random computer choices (noted below in getComputerChoice)
let choices = ["rock","paper","scissors"];

//html document variables
let playerScoreBox = document.querySelector(".player-score-box");

let computerScoreBox = document.querySelector(".computer-score-box");

let winnerBox = document.querySelector(".winner-box");

let computerChoiceShow = document.querySelector(".computer-choice-box");


//empty array that we will fill up later so that we can add the winner of each round to it (winAr.push in the playRound function) and see who has the most wins at the end (logTheWinner function).
let winAr= [];


//will execute the checkWinner function using computerSelection and playerSelection parameters, will push the "winner" (e.g. the "player", "computer", or "tie") to the Array winAr
function playRound(playerInput){

    //defining variaables
    let computerSelection = getComputerChoice();
    let playerSelection = playerInput;

    //adding checkWinner function to variable and pushing the result to the array winAr
    const winner = checkWinner(computerSelection, playerSelection);
    winAr.push(winner);

    //will display computer choice
    computerChoiceShow.textContent = `Computer Chose: ${getComputerChoice()}`;
    
    //will display who won when either the computer or player has won
    logTheWinner()
}   

//randomly generates a number from 0 - .99 with Math.random and multiplys that by choices.length (3) which give a number betwen 0 - 2.97. Then round down using math.floor which will give 0, 1, or 2. This is done to index the array using [] which can be will return "rock" for choices[0] and so on. 
function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
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


//filter function is lopping over the winAr and creating a new function based on the other function we use within it here it is saying if the item = "player" it will be added to the new array. The same is done with Computer. if player gets added 3 times and computer is added twice the array lenght of playerWins will be 3 and the computerWins will be 2. We can use this to figure out who has the most wins and is the ultimate winner of the game based on the if, else statement below. This if, else statment needs to be done inside the function because the playerWins and ComputerWins are defined within the function logTheWinner. the if/ else statement will display "player has won the game" if the playerWins array count equals 5.

function logTheWinner() {
    let playerWins = winAr.filter((item) => item == "player").length;
    let computerWins = winAr.filter((item) => item == "computer").length;

    playerScoreBox.textContent = `player score:${playerWins}`;
    computerScoreBox.textContent = `computer score:${computerWins}`;

    if (playerWins == 5){
        winnerBox.textContent = "Player has Won the Game";
    } else if (computerWins == 5) {
        winnerBox.textContent = "Computer has Won the Game";
    } else if (computerWins > 5 || playerWins > 5){
        winnerBox.textContent = "Restart the Game!"
    }
}

//player input through putting will take the parameter playerInput in playRound and use the arguement "rock", "paper", or "scissor"
let rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", function (){
   playRound("rock");
})

let paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", function (){
   playRound("paper");
})

let scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", function (){
   playRound("scissor");
})

//will reset WinAr and display the new player score (playerWins) and computer score (computerWins), which will be 0.
let restartButton = document.querySelector(".restart-btn");
restartButton.addEventListener("click", function() {
     winAr = [];

     let playerWins = winAr.filter((item) => item == "player").length;
    let computerWins = winAr.filter((item) => item == "computer").length;
     playerScoreBox.textContent = `player score:${playerWins}`;
    computerScoreBox.textContent = `computer score:${computerWins}`;
})