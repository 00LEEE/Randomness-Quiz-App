const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('Button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is the power house of the cell?',
        answers: [
            { text: 'Mitochondria', correct: true},
            { text: 'Cell', correct: false},
            { text: 'Horse?', correct: false},
            { text: 'V8 Engine..', correct: false}
        ]
    },
    {
        question: 'Who is Joe Biden?',
        answers: [
            { text: 'US President', correct: true},
            { text: '4', correct: false},
            { text: 'Guy', correct: false},
            { text: 'Joe Biden', correct: true}
        ]
    },
    {
        question: 'Who is Aunt Jemima?',
        answers: [
            { text: 'Jack Sparrow', correct: false},
            { text: 'Koles Sister', correct: false},
            { text: 'Syrup Lady', correct: true},
            { text: 'Someone', correct: false}
        ]
    },
    {
        question: 'Do you want to be friends with Kole?',
        answers: [
            { text: 'HELL YEAH!', correct: true},
            { text: 'Stranger Danger', correct: false},
        ]
    },
    {
        question: 'How many fingers does a person have?',
        answers: [
            { text: '4 fungers', correct: false},
            { text: '22 Fingy', correct: false},
            { text: 'Frosted Flakes', correct: false},
            { text: '5 Fingers', correct: true}
        ]
    },
    {
        question: 'Does Nicholas Cage have brown hair?',
        answers: [
            { text: 'Yes', correct: true},
            { text: 'Blonde', correct: false},
            { text: 'No', correct: false},
            { text: 'Pink', correct: false}
        ]
    },
    {
        question: 'Who is the best Avenger Superhero?',
        answers: [
            { text: 'Spiderman', correct: false},
            { text: 'The Hulk', correct: false},
            { text: 'Ironman', correct: true},
            { text: 'Thor', correct: false}
        ]
    }
]