var startButton = document.getElementById("start-btn");
var startDiv = document.getElementById("start-msg");
var questionContainer = document.getElementById("container");
var startTimerBtn = document.getElementById("start-btn");
var refreshButtonEl = document.getElementById("refresh-btn");
var timerArea = document.querySelector("#time-cont");
var questionElement = document.getElementById("question");
var answerButtonElement = document.getElementById("answer-btns");
var initialsEl = document.getElementById("initials");
var submitScore = document.getElementById("submit-btn");
var finalScore = document.getElementById("final-score");


var finalScreen = document.getElementById("final-screen");

var shuffledQuestions;
var currentQuestionIndex = 0;

var puntos = 0;

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
    question: "Commonly used data types DO NOT include:",
    answers: [
      { text: "1. Strings", correct: false },
      { text: "2. Booleans", correct: false },
      { text: "3. Numbers", correct: false },
      { text: "4. Alerts", correct: true },
    ],
  },
  {
    question: "Which built-in method returns the length of the string?",
    answers: [
      { text: "1. length()", correct: true },
      { text: "2. size()", correct: false },
      { text: "3. index()", correct: false },
      { text: "4. None of the above.", correct: false },
    ],
  },
  {
    question:
      "Which of the following function of String object returns the primitive value of the specified object.",
    answers: [
      { text: "1. toLocaleUpperCase()", correct: false },
      { text: "2. toUpperCase()", correct: false },
      { text: "3. toString()", correct: false },
      { text: "4. valueOf()", correct: true },
    ],
  },
  {
    question: "What is the meaning of isNaN?",
    answers: [
      { text: "1. Numbers and Nulls", correct: false },
      { text: "2. Not a Number", correct: true },
      { text: "3. Non a Number", correct: false },
      { text: "4. Null Number", correct: false },
    ],
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "1. <script>", correct: true },
      { text: "2. <scripting>", correct: false },
      { text: "3. <js>", correct: false },
      { text: "4. <javascript>", correct: false },
    ],
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
      { text: "1. <body>", correct: false },
      { text: "2. <head>", correct: false },
      { text: "3. both <head> and <body>", correct: true },
      { text: "4. <footer>", correct: false },
    ],
  },
  // {
  //   question: "How do you create a function in JavaScript?",
  //   answers: [
  //     { text: "1. function myFunction()", correct: true },
  //     { text: "2. function:myFunction()", correct: false },
  //     { text: "3. function = myFunction()", correct: false },
  //     { text: "4. let function()", correct: false },
  //   ],
  // },
  // {
  //   question: "How can you add a comment in a JavaScript?",
  //   answers: [
  //     { text: '1. "This is a comment"', correct: false },
  //     { text: "2. <!--This is a comment-->", correct: false },
  //     { text: "//This is a comment", correct: true },
  //     { text: "4. \\This is a comment", correct: false },
  //   ],
  // },
  // {
  //   question: "What is the correct way to write a JavaScript array?",
  //   answers: [
  //     { text: '1. var color = ["red", "blue", "pink"]', correct: true },
  //     { text: '2. var color = "red", "blue", "pink"', correct: false },
  //     { text: '3. var color = ("red", "blue", "pink")', correct: false },
  //     { text: '4. var color = {"red", "blue", "pink"}', correct: false },
  //   ],
  // },
  // {
  //   question: "How do you declare a JavaScript variable?",
  //   answers: [
  //     { text: "1. v varName", correct: false },
  //     { text: "2. var varName", correct: true },
  //     { text: "3. variable varName", correct: false },
  //     { text: "4. var = varName", correct: false },
  //   ],
  // },
];

// Start quizz event
startButton.addEventListener("click", startQuiz);

//To start timer by clicking event
startTimerBtn.onclick = startTimer;

function startQuiz() {
  startButton.classList.add("hidden");
  startDiv.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  timerArea.classList.remove("hidden")
  

  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  console.log(shuffledQuestions);
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  console.log("Hello");
  console.log(currentQuestionIndex);
  if (currentQuestionIndex === (questions.length-1)) {
    submitScore.classList.remove("hidden");
    startButton.classList.add("hidden");
    startDiv.classList.add("hidden");
    questionContainer.classList.add("hidden");
    timerArea.classList.add("hidden");
    finalScreen.classList.remove("hidden")
   
    finalScore.innerText = " " + puntos

  } else {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  }
}


function showQuestion(question) {
  console.log(question);
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    

    answerButtonElement.appendChild(button);
  });
  
}


function resetState() {
  answerButtonElement.innerHTML = "";

}

function selectAnswer(e) {
  currentQuestionIndex += 1;

  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;


  if (correct) {
   puntos+=1
  }
  console.log(correct);
  Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
}
// Create a constant so my right and wrong colors show up

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
    remainingTime-- - 5;
  }
  // setNextQuestion()
  setTimeout(setNextQuestion, 1000);
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

// Start Over button function -- working
refreshButtonEl.addEventListener("click", reload, false);
function reload() {
  reload = location.reload();
}

// // Final Score Section
// function saveHighscore() {
//   // get value of input box
//   var initials = initialsEl.value.trim();

//   if (initials !== "") {
//     // get saved scores from localstorage, or if not any, set to empty array
//     var highscores =
//       JSON.parse(window.localStorage.getItem("highscores")) || [];

//     // format new score object for current user
//     var newScore = {
//       score: time,
//       initials: initials,
//     };

//     // save to localstorage
//     highscores.push(newScore);
//     window.localStorage.setItem("highscores", JSON.stringify(highscores));

//     // redirect to next page
//     window.location.href = "score.html";
//   }
// }

// function checkForEnter(event) {
//   // "13" represents the enter key
//   if (event.key === "Enter") {
//     saveHighscore();
//   }
// }

// submit initials
// submitScore.onclick = saveHighscore;
