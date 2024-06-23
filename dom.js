import {
    getRandomNum,
    getComputerChoice,
    getHumanChoice,
    playRound,

} from "/app.js";

const playButtons = Array.from(document.querySelectorAll(".selection"));

playButtons.forEach((button) => {
    button.addEventListener("click", () => {
        //call playRound with proper selection


    })
})
