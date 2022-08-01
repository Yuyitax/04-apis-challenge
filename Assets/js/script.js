const startButton = document.getElementById('start-btn')
const questionList = document.getElementById('all-questions')
const footerArea = document.getElementById('footer')

var timerElement = document.querySelector("timer");

var timer;
var startTimer;


startButton.addEventListener('click', startQuiz)

function startQuiz() {
    startButton.classList.add('hidden')
    questionList.classList.remove('hidden')
    footerArea.classList.remove('hidden')
    timer = 120;
    startTimer()
  
}

function setNextQuestion() {

}

function selectAnswer() {

}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }

var refreshButtonEl = $('#refresh-btn');
refreshButtonEl.on('click', function () {
    location.reload();
  });
  
