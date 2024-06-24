import {
    getRandomNum,
    getComputerChoice,
    getHumanChoice,
    playRound,

} from "/app.js";

const playButtons = Array.from(document.querySelectorAll(".selection"));
const resultsText = document.querySelector(".results");

playButtons.forEach((button) => {
    button.addEventListener("click", () => {
        //call playRound with proper selection
        let humanChoice = button.textContent.toLowerCase();
        let computerChoice = getComputerChoice();
        resultsText.textContent = playRound(humanChoice, computerChoice);

    })
})

//Add div for results -> change logs to dom methods
// Display running score,announce winner after 5 points reached
//and  of the game once one player reaches 5 points.
