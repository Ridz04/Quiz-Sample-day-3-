const questions=[
    {
        question: "what is my name?",
        answers:[
            {text: "sonu", correct: false},
            {text: "b2k", correct: false},
            {text: "janmajay", correct: true},
            {text: "morvious", correct: false},
            
            
        ]




    },
    {
        question: "Where I live?",
        answers:[
            {text: "jamshedpur", correct: false},
            {text: "usa", correct: false},
            {text: "bhubaneswar", correct: true},
            {text: "cuttack", correct: false},
            
            
        ]




    },
    {
        question: "what is my age?",
        answers:[
            {text: "12", correct: false},
            {text: "73", correct: false},
            {text: "20", correct: true},
            {text: "59", correct: false},
            
            
        ]




    },
    {
        question: "what is my goal?",
        answers:[
            {text: "money", correct: false},
            {text: "fitness", correct: false},
            {text: "All of These", correct: true},
            {text: "name", correct: false},
            
            
        ]




    }

]

const questionsElement = document.getElementById("question");

const answerButtons = document.getElementById("answer-buttons");

const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber= currentQuestionIndex + 1;
    questionsElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


        function selectAnswer(e){
            const selectedBtn = e.target;
            const isCorrect = selectedBtn.dataset.correct==="true";
            if(isCorrect) {
                selectedBtn.classList.add("correct");
                score++;
               
            }
            else{
                selectedBtn.classList.add("incorrect");
            }

            Array.from(answerButtons.children).forEach(button => {
                if (button.dataset.correct==="true"){
                    button.classList.add("correct");
                }
                button.disabled=true;
            });

            nextButton.style.display = "block";


        }

        function showScore(){
            resetState();
            questionsElement.innerHTML = "Your Score is " + score + "/" + questions.length;
            nextButton.innerHTML = "Restart";
            nextButton.style.display = "block";
        }

function handelNextbutton() { 
     currentQuestionIndex++;
        if (currentQuestionIndex< questions.length){
            showQuestion();
        }else{showScore();}
}


nextButton.addEventListener("click", () => {
    if (currentQuestionIndex< questions.length){
        handelNextbutton();
    }else{
        startQuiz();
    }
})

startQuiz();
