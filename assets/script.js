var startButton = document.getElementById('start-btn');
var startDiv = document.getElementById('start-msg');
var questionContainer = document.querySelector('#question-container');
var startTimerBtn = document.getElementById('start-btn');
var refreshButtonEl = document.getElementById('refresh-btn')
var footerArea = document.querySelector('#footer')
var questionElement = document.getElementById('question')
var answerButtonElement = document.getElementById('answer-btns')

var shuffledQuestions;
var currentQuestionIndex;

var score = 0; 

// Timer 
var remainingTime = 60;
var isStopped = true;
// Select Countdown container
const countContainer = document.getElementById("timer");

// function to display time
const renderTime = () => {
  // decement time
  remainingTime -= 1;
  // render count on the screen
  countContainer.innerHTML = remainingTime;
  // timeout on zero
  if (remainingTime === 0) {
    isStopped = true;
    clearInterval(timer);
    remainingTime = 60;
  }
};
// Function to start Timer
const startTimer = () => {
  if (isStopped) {
    isStopped = false;
    countContainer.innerHTML = remainingTime;
    timer = setInterval(renderTime, 1000);
  }
};


// List of all questions
var questions = [
  {
    question: 'Commonly used data types DO NOT include:',
    answers: [
      {text:'1. Strings', correct: false},
      {text:'2. Booleans', correct: false},
      {text:'3. Numbers', correct: false},
      {text:'4. Alerts', correct: true}
    ]
  },
  {
    question: 'Which built-in method returns the length of the string?',
    answers: [
      {text:'1. length()', correct: true},
      {text:'2. size()', correct: false},
      {text:'3. index()', correct: false},
      {text:'4. None of the above.', correct: false}
    ]
  },
{
  question: 'Which of the following function of String object returns the primitive value of the specified object.',
  answers: [
    {text:'1. toLocaleUpperCase()', correct: false},
    {text:'2. toUpperCase()', correct: false},
    {text:'3. toString()', correct: false},
    {text:'4. valueOf()', correct: true}
  ]
},
{
  question: 'What is the meaning of isNaN?',
  answers: [
    {text:'1. Numbers and Nulls', correct: false},
    {text:'2. Not a Number', correct: true},
    {text:'3. Non a Number', correct: false},
    {text:'4. Null Number', correct: false}
  ]
},
{
  question: 'Inside which HTML element do we put the JavaScript?',
  answers: [
    {text:'1. <script>', correct: true},
    {text:'2. <scripting>', correct: false},
    {text:'3. <js>', correct: false},
    {text:'4. <javascript>', correct: false}
  ]
},
{
  question: 'Where is the correct place to insert a JavaScript?',
  answers: [
    {text:'1. <body>', correct: false},
    {text:'2. <head>', correct: false},
    {text:'3. both <head> and <body>', correct: true},
    {text:'4. <footer>', correct: false}
  ]
},
{
  question: 'How do you create a function in JavaScript?',
  answers: [
    {text:'1. function myFunction()', correct: true},
    {text:'2. function:myFunction()', correct: false},
    {text:'3. function = myFunction()', correct: false},
    {text:'4. let function()', correct: false}
  ]
},
{
  question: 'How can you add a comment in a JavaScript?',
  answers: [
    {text:'1. "This is a comment"', correct: false},
    {text:'2. <!--This is a comment-->', correct: false},
    {text:'//This is a comment', correct: true},
    {text:'4. \\This is a comment', correct: false}
  ]
},
{
  question: 'What is the correct way to write a JavaScript array?',
  answers: [
    {text:'1. var color = ["red", "blue", "pink"]', correct: true},
    {text:'2. var color = "red", "blue", "pink"', correct: false},
    {text:'3. var color = ("red", "blue", "pink")', correct: false},
    {text:'4. var color = {"red", "blue", "pink"}', correct: false}
  ]
},
{
  question: 'How do you declare a JavaScript variable?',
  answers: [
    {text:'1. v varName', correct: false},
    {text:'2. var varName', correct: true},
    {text:'3. variable varName', correct: false},
    {text:'4. var = varName', correct: false}
  ]
},
]

// Start quizz event
startButton.addEventListener('click', startQuiz)

//To start timer by clicking event
startTimerBtn.onclick = startTimer;

function startQuiz() {
    startButton.classList.add('hidden');
    startDiv.classList.add('hidden'); 
    questionContainer.classList.remove('hidden');
    footerArea.classList.remove('hidden');
    
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  // showQuestion()
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonElement.appendChild(button)
  })
}

//Trying to approach questions without shuffling

// function showQuestion() {
// var currentQuestion = questions[currentQuestionIndex];
// var questionElement = document.getElementById('question');
// questionElement.textContent = currentQuestion.question;
// answerButtonElement.innerHTML = '';
// for (var i = 0; i < currentQuestion.answers.length; i++) {
// var choice = currentQuestion.answers[i].text;
// var choiceBtn = document.createElement('button');
// choiceBtn.setAttribute('class', 'choice');
// choiceBtn.setAttribute('value', choice);
// answerButtonElement.appendChild(choiceBtn);
// console.log(choice)
// }
// }
  
function resetState(){
while (answerButtonElement.firstChild) {
  answerButtonElement.removeChild
  (answerButtonElement.firstChild)
}
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
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

// Start Over button function
refreshButtonEl.addEventListener("click", reload, false);
function reload() {
  reload = location.reload();
}