// start game

// next question

// selected answers




var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContentEl = document.getElementById("container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answers")

let shuffleQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame);



function startGame() {
    startButton.classList.add("hide");
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContentEl.classList.remove("hide");
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
    nextButton.classList.add("hide");
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}


function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    seStatusClass(document.body, correct);
    Array.from(answerButtonsEl.children).forEach(button => {
        seStatusClass(button, button.dataset.correct)
    })
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
    element.classList.remove("remove")
    element.classList.remove("wrong")
}




var questions = [
    {
        question: "Which of the provided answers is NOT a data type?",
        answers: [
            { text: "Boolean", correct: false },
            { text: "Object", correct: false},
            { text: "Function", correct: true },
            { text: "Symbol", correct: false }
        ]
    }
]