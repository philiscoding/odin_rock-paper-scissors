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
    let userInput = prompt("Choose between rock, paper or scissors: ");

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


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    switch (true) {
        case humanChoice === computerChoice:
            return `Tie! You both picked ${computerChoice}.`;

            //Computer winning cases
        case humanChoice == "rock" && computerChoice == "paper":
        case humanChoice == "scissors" && computerChoice == "rock":
        case humanChoice == "paper" && computerChoice == "scissors":
            computerScore++;
            return `Computer wins! ${computerChoice} beats ${humanChoice}.`;

            //Player winning cases
        case humanChoice == "rock" && computerChoice == "scissors":
        case humanChoice == "paper" && computerChoice == "rock":
        case humanChoice == "scissor" && computerChoice == "paper":
            humanScore++;
            return `Player wins! ${humanChoice} beats ${computerChoice}.`;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
