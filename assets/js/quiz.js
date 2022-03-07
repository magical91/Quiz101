// start game

// next question

// selected answers

// end game

// save name and score




var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var finishButton = document.getElementById("finish-btn");
var questionContentEl = document.getElementById("container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answers");
var contentEl = document.getElementById("content");
var subHeaderEl = document.getElementById("subheader");


let shuffleQuestions, currentQuestionIndex
let score = "";

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    nextQuestion();
});
finishButton.addEventListener("click", endGame);







function startGame() {
    startButton.classList.add("hide");
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContentEl.classList.remove("hide");
    score = 0;
    console.log(score);
    nextQuestion();
}








function nextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex]);
}









function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
    

        button.addEventListener("click", selectAnswer);
        answerButtonsEl.appendChild(button);

        
        
    });
}










function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}










function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    
    if (correct) {
        score = score + 20;
        console.log(score)
    }
    seStatusClass(document.body, correct);
    Array.from(answerButtonsEl.children).forEach(button => {
        seStatusClass(button, button.dataset.correct)
    })
    if (shuffleQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } 
    else {
        finishButton.classList.remove("hide");
    }
    
};










function seStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
};










function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}






function endGame(result) {
    finishButton = questionContentEl.classList.add("hide");
    score = localStorage.setItem("score", score);

    document.getElementById("question").innerHTML = "You have completed the quiz!";
    questionContentEl.classList.remove("hide");
    document.getElementById("subheader").innerHTML = "Your score is " + localStorage.getItem('score') + " ";
    subHeaderEl.classList.remove("hide");
    answerButtonsEl.classList.add("hide");
    

    
}





function saveScore() {
    

}





var questions = [
    {
        question: "Which of the provided answers is NOT a data type?",
        answers: [
            { text: "Boolean", correct: false },
            { text: "Object", correct: false },
            { text: "Function", correct: true },
            { text: "Symbol", correct: false }
        ]
    },
    {
        question: "Inside which HTML element do we put th JavaScript?",
        answers: [
            { text: "<script>", correct: true },
            { text: "<javascript>", correct: false },
            { text: "<scripting>", correct: false },
            { text: "<js>", correct: false }
        ]
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            { text: "msgBox('Hello World');", correct: false },
            { text: "alert('Hello World');", correct: true },
            { text: "msg('Hello World');", correct: false },
            { text: "alertBox('Hello World');", correct: false }
        ]
    },
    {
        question: "How can you add a comment in JavaScript?",
        answers: [
            { text: "<!--This is a comment-->", correct: false },
            { text: "//This is a comment", correct: true },
            { text: "'This is a comment", correct: false },
            { text: "/*This is a comment*/", correct: false }
        ]
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        answers: [
            { text: "Math.ceil(x, y)", correct: false },
            { text: "top(x, y)", correct: false },
            { text: "ceil(x, y)", correct: false },
            { text: "Math.max(x, y)", correct: true }
        ]
    },
]


