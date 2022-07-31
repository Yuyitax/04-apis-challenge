// var scores = document.querySelector("#scores");
// var timer = document.querySelector("#timer");
// var container = document.querySelector("#container");
// var title = document.querySelector("#title");
// var content = document.querySelector("#content");
// var answer = document.querySelector("#answer");

const startButton = document.getElementById('start-btn')
startButton.addEventListener('click', startQuiz)

function startQuiz() {
    startButton.classList.add('hidden')
}

var refreshButtonEl = $('#refresh-btn');
refreshButtonEl.on('click', function () {
    location.reload();
  });
  
