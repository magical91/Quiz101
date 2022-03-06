// start game

// next question

// selected answers




var startButton = document.getElementById("start-btn");
var questionContentEl = document.getElementById("container")

startButton.addEventListener("click", startGame);



function startGame() {
    console.log("started");
    startButton.classList.add("hide");
    questionContentEl.classList.remove("hide");
    nextQuestion();
}





function nextQuestion() {

}





function selectAnswer() {

}