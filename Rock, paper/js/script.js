function playGame() {

    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;
    
    var amountOfRounds = prompt("How many rounds would you like to play?");
    
    //Computer choice
    function computerPlay() {
        let random = Math.random();
        if (random <= 0.3333) {
            return "paper";
        } else if (random >= 0.6666) {
            return "rock";
        } else {
            return "scissors";
        }
    }
    
    //Plays one round of RPS
    function playRound(playerChoice, computerSelection) {
        if (playerChoice === computerSelection) {
            return draw;
        } else if (playerChoice === "rock" && computerSelection === "scissors") {
            return playerWinRound;
    
        } else if (playerChoice === "paper" && computerSelection === "rock") {
            return playerWinRound;
    
        } else if (playerChoice === "scissors" && computerSelection === "paper") {
            return playerWinRound;
    
        } else {
            return computerWinRound;
    
        }
    }
    
    //Specifies round win messages
    let playerWinRound = "you win!"
    let computerWinRound = "computer wins"
    let draw = "tie"
    
    
    //For loop that plays multiple rounds
    for (let i = 1; i <= amountOfRounds; i++) {
        let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
        const computerSelection = computerPlay();
        let roundResult = playRound(playerChoice, computerSelection);
        console.log("round: " + i);
        console.log("player selected " + playerChoice + " computer selected " + computerSelection);
        console.log("result: " + roundResult);
        gameScore(roundResult);
        console.log(playerScore + " player wins " + computerScore + " computer wins " + draws + " ties");
    
    }
    
    
    //Keeps score and prints out correct messages based on score
    function gameScore(result) {
    
        if (result === playerWinRound) {
            playerScore++;
        } else if (result === draw) {
            draws++;
        } else {
            computerScore++;
        }
    
    
        if (playerScore === 5) {
            console.log(playerWin);
            return;
        }
        if (computerScore === 5) {
            console.log(computerWin);
            return;
        }
    }
    };