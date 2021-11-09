const quizData = [
    {
        question: "1. Which type of language is Javascript?",
        a: "Object-oriented",
        b: "High-level",
        c: "Assembly-language",
        d: "Object-based",
        correct: "d",
    },
    {
        question: "2. Which is not valid data type in Javascipt?",
        a: "Undefined",
        b: "float",
        c: "Number",
        d: "Boolean",
        correct: "b",
    },
    {
        question: "3. Javascript is ______ Side Scripting Language",
        a: "Browser",
        b: "Server",
        c: "ISP",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "4. What is the original name of Javascript?",
        a: "LiveScript",
        b: "Mocha",
        c: "Escript",
        d: "Javascript",
        correct: "b",
    },
    {
        question: "5. What are the types of Pop up boxes available in JavaScript?",
        a: "Prompt",
        b: "Alert",
        c: "Confirm",
        d: "All of the above",
        correct: "d",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})