function getRandomNum(max) {
    return Math.floor(Math.random() * max) + 1;
}

function getComputerChoice() {
    let result = getRandomNum(3);

    switch (result) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice() {
    let userInput = "";

    if (userInput === null) {
        alert("Canceled. Refresh page to play again.");
        return;
    }

    userInput = userInput.toLowerCase();

    switch (userInput) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
    }

    //Prompt again if no valid input was given
    alert("Please provide a valid input: rock, paper or scissors.");
    return getHumanChoice();

}

//DELETE THIS
let humanScore = 0;
let computerScore = 0;
let gameRound = 0;

function playRound(humanChoice, computerChoice) {
    switch (true) {
        //Tie case
        case humanChoice == computerChoice:
            gameRound++;
            return `Tie! You both picked ${computerChoice}.
             Round: ${gameRound}, Player Score: ${humanScore}, Computer Score: ${computerScore}`;

            //Computer winning cases
        case humanChoice == "rock" && computerChoice == "paper":
        case humanChoice == "scissors" && computerChoice == "rock":
        case humanChoice == "paper" && computerChoice == "scissors":
            computerScore++;
            gameRound++;
            return `Computer wins! ${computerChoice} beats ${humanChoice}.
            Round: ${gameRound}, Player Score: ${humanScore}, Computer Score: ${computerScore}`;

            //Player winning cases
        case humanChoice == "rock" && computerChoice == "scissors":
        case humanChoice == "paper" && computerChoice == "rock":
        case humanChoice == "scissors" && computerChoice == "paper":
            humanScore++;
            gameRound++;
            return `Player wins! ${humanChoice} beats ${computerChoice}.Round: ${gameRound}, Player Score: ${humanScore}, Computer Score: ${computerScore}`;
    }


}

function checkWinner() {
    if (humanScore === 5) {
        return `Player wins!! End results: ${humanScore} : ${computerScore}. Refresh page to play again.`;
    } else if (computerScore === 5) {
        return `Computer wins!! End results: ${humanScore} : ${computerScore}. Refresh page to play again.` ;
    }
}



export {
    getRandomNum,
    getComputerChoice,
    getHumanChoice,
    playRound,
    checkWinner,
};
