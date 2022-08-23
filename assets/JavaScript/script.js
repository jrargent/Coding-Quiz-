var timeLeft = 10;
var timerEl = document.querySelector("#timer");
var startButtonEl = document.querySelector(".start");
var questionHeader = document.querySelector("#question-header");
var ButtonEl = document.querySelector(".btn");

const questions = [
  "Commonly used data types DO Not Include: "]; 
    // [["1. strings", false],["2. booleans", false],["3. alerts", true],["4. numbers", false]]],
  
const answers = ["1. strings", "2. booleans", "3. alerts", "4. numbers"];







// function for quiz start - shows upon page load
var quizStart = function() {
  startButtonEl.textContent = "Start Quiz"

  var startButtonSet = document.querySelector(".quiz-container");
    startButtonSet.appendChild(startButtonEl);

  questionHeader.textContent = "Coding Quiz Challenge!"

     
};

quizStart();


var quizRun = function() {
  var buttonContainerEl = document.querySelector(".btn-container");
  
  if (buttonContainerEl.style.display === "none") {
    buttonContainerEl.style.display = "flex";
    startButtonEl.style.display = "none";
  }

  questionHeader.textContent = questions[0];

  var answerBtn1 = document.querySelector("#a1");
  answerBtn1.textContent = answers[0];

  var answerBtn1 = document.querySelector("#a2");
  answerBtn1.textContent = answers[1];

  var answerBtn1 = document.querySelector("#a3");
  answerBtn1.textContent = answers[2];

  var answerBtn1 = document.querySelector("#a4");
  answerBtn1.textContent = answers[3];

  countdown();


}



//have 
//key value pairs - key, value. Array is key value pairs. Key is question, value is another array that is those four answers 
//and whether they are correct or not. the answer array will be key is answer and value is true/false





//need to set this function to start when button is clicked (set event/add event thing from taskinator)

startButtonEl.addEventListener("click", quizRun); 


// score is equal to time left when quiz ends. 
//incorrect answers subtract 10 from the timeInterval
//quiz ends immediately when time runs out - user loses and gets no score


// Timer that counts down
function countdown() {   
    
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 0) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = "Time: " + timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = "Time: 0";
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
  
        // Call the function to end quiz
        
       
      }
    }, 1000);
  };