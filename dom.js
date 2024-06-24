import {
    getRandomNum,
    getComputerChoice,
    getHumanChoice,
    playRound,
    checkWinner

} from "/app.js";

const playButtons = Array.from(document.querySelectorAll(".selection"));
const resultsText = document.querySelector(".results");

playButtons.forEach((button) => {
    button.addEventListener("click", function playRoundBtn() {
        //call playRound with proper selection
        let humanChoice = button.textContent.toLowerCase();
        let computerChoice = getComputerChoice();
        resultsText.textContent = playRound(humanChoice, computerChoice);

        //display winner
        if (checkWinner()) {
            resultsText.textContent = checkWinner();

            playButtons.forEach((button) => {
                button.removeEventListener("click", playRoundBtn);
            })

        }
    })


});







//Add div for results -> change logs to dom methods
// Display running score,announce winner after 5 points reached
//and  of the game once one player reaches 5 points.
