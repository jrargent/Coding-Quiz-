var timeLeft = 10;
var timerEl = document.querySelector("#timer");
var startButtonEl = document.querySelector(".start");
var questionHeader = document.querySelector("#question-header");
var ButtonEl = document.querySelector(".btn");

  // questions, answers, and answers' values exist in a multidimensional array
const questions = [
  ["Commonly used data types DO Not Include: ", 
    [["1. strings", false],["2. booleans", false],["3. alerts", true],["4. numbers", false]]],
  ["The condition in an if / else statement is enclosed with _______. ",
    [["1. quotes", false],["2. curly brackets", true],["3. parenthesis", false],["4. square brackets", false]]],
  ["Arrays in JavaScript can be used to store _______. ", 
    [["1. numbers and strings", false],["2. other arrays", false],["3. booleans", false],["4. all of the above", true]]],
  ["String values must be enclosed within _______ when being assigned to variables. ", 
    [["1. commas", false],["2. curly brackets", false],["3. quotes", true],["4. parenthesis", false]]],
  ["A very useful tool used during development and debugging for printing content to the debugger is: ", 
    [["1. JavaScript", false],["2. terminal/bash", false],["3. for loops", false],["4. console.log", false]]]
]








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