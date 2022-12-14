var timeLeft = 100;
var timerEl = document.querySelector("#timer");
var timerStart = false;
var intervalId;
var startButtonEl = document.querySelector(".start");
var questionHeader = document.querySelector("#question-header");
var scoreHeader = document.querySelector("#score-header");
var highScoreHeader = document.querySelector("#highscore-header")
var quizContainer = document.querySelector(".quiz-container");
var buttonContainerEl = document.querySelector(".btn-container");
var scoreContainerEl = document.querySelector(".score-container");
var highScoreContainer = document.querySelector(".highscore-container");
var ButtonEl = document.querySelector(".btn");
var highScore = []
var scoreIdCounter = 0

// multidimensional array for questions, answers, and answers' values
const questions = [
  ["Commonly used data types DO Not Include: ",
    [["1. strings", false], ["2. booleans", false], ["3. alerts", true], ["4. numbers", false]]],
  ["The condition in an if / else statement is enclosed with _______. ",
    [["1. quotes", false], ["2. curly brackets", true], ["3. parenthesis", false], ["4. square brackets", false]]],
  ["Arrays in JavaScript can be used to store _______. ",
    [["1. numbers and strings", false], ["2. other arrays", false], ["3. booleans", false], ["4. all of the above", true]]],
  ["String values must be enclosed within _______ when being assigned to variables. ",
    [["1. commas", false], ["2. curly brackets", false], ["3. quotes", true], ["4. parenthesis", false]]],
  ["A very useful tool used during development and debugging for printing content to the debugger is: ",
    [["1. JavaScript", false], ["2. terminal/bash", false], ["3. for loops", false], ["4. console.log", true]]]
]
//used to increment question array index
var questionId = 0;
startButtonEl.addEventListener("click", incrementQuestion);

function incrementQuestion() {
  

  if (buttonContainerEl.style.display === "none") {
    buttonContainerEl.style.display = "flex";
    startButtonEl.style.display = "none";
    addButtonListeners();
  }
  countdownStart();
  setQuestion(questionId++);

  
}

// function to add clicks to answer buttons and to check answers
function addButtonListeners() {
  var answerBtn1 = document.querySelector("#a1");
  answerBtn1.addEventListener("click", checkAnswer); //add a check answer function. Will check value and then increment to next question
  var answerBtn2 = document.querySelector("#a2");
  answerBtn2.addEventListener("click", checkAnswer);
  var answerBtn3 = document.querySelector("#a3");
  answerBtn3.addEventListener("click", checkAnswer);
  var answerBtn4 = document.querySelector("#a4");
  answerBtn4.addEventListener("click", checkAnswer);
}

function checkAnswer(event) {
  var button = event.target;
  var answerValidation = document.querySelector("#answer")
  if (button.dataset.correct === "true") {
      answerValidation.textContent = "Correct"
  }
  else {
    timeLeft -= 10;
    answerValidation.textContent = "Incorrect"
  }
   
  if (questionId >= questions.length) {
    quizEnd();
  }
  else {
  incrementQuestion();
  }
}


// function for quiz start - shows upon page load
var quizStart = function () {
  questionHeader.textContent = "Coding Quiz Challenge!"

  startButtonEl.textContent = "Start Quiz";
  quizContainer.appendChild(startButtonEl);
  
  highScoreContainer.style.display = "none";
};

quizStart();

function setQuestion(questionNumber) {


  /*pulling multidimensional array indeces is done as follows:
      (Refer to const questions array above)
    to pull the question, format is [i][0]. Example: [0][0] is "Commonly used data types..."
    to pull the corresponding answer, format is [i][i][i][0]. Example: [0][1][0][0] is "1. strings"
    to pull the corresponding answer value, format is [i][i][i][1]. Example: [0][1][0][1] is "false"
  
      numbers in question indeces can be incremented to switch between the questions/answers
  */

  questionHeader.textContent = questions[questionNumber][0];

  var answerBtn1 = document.querySelector("#a1");
  answerBtn1.textContent = questions[questionNumber][1][0][0];
  answerBtn1.dataset.correct = questions[questionNumber][1][0][1];
  console.debug(answerBtn1.dataset.correct); // remove console.logs before push to production

  var answerBtn2 = document.querySelector("#a2");
  answerBtn2.textContent = questions[questionNumber][1][1][0];
  answerBtn2.dataset.correct = questions[questionNumber][1][1][1];
  console.log(answerBtn2.dataset.correct)

  var answerBtn3 = document.querySelector("#a3");
  answerBtn3.textContent = questions[questionNumber][1][2][0];
  answerBtn3.dataset.correct = questions[questionNumber][1][2][1];
  console.log(answerBtn3.dataset.correct)

  var answerBtn4 = document.querySelector("#a4");
  answerBtn4.textContent = questions[questionNumber][1][3][0];
  answerBtn4.dataset.correct = questions[questionNumber][1][3][1];
  console.log(answerBtn4.dataset.correct)

  
}




// score is equal to time left when quiz ends. 
//incorrect answers subtract 10 from the timeInterval
//quiz ends immediately when time runs out - user loses and gets no score
// high scores page should have options to clear high score or go back. 
//go back will re-fresh page
//Clear high scores should remove the list created by pulling data from localStorage


 

// function for end quiz
function quizEnd() {
  
  clearInterval(intervalId);
  timerEl.textContent = "Time: " + timeLeft;
  // quiz container disappears
  quizContainer.style.display = "none";

    // selects score container div and makes it appear
  
    if (scoreContainerEl.style.display === "none") {
        scoreContainerEl.style.display = "flex";
    }

      scoreHeader.textContent = "Quiz Complete!";

  var scoreContainerPara = document.createElement("p");
      scoreContainerPara.textContent = "Your final score is " + timeLeft; // need to fix so that it does not show numbers below 0
        scoreContainerEl.appendChild(scoreContainerPara);   

  var enterInitialsEl = document.createElement("form");
      enterInitialsEl.className = "score-submit";
      enterInitialsEl.innerHTML = "<label for='initials'>Enter Initials: </label> <input type='text'id='initials-holder' name='initials'/>";
        scoreContainerEl.appendChild(enterInitialsEl);

    var submitButtonEl = document.createElement("button");
        submitButtonEl.className = "submit";
        submitButtonEl.type = "submit";
        submitButtonEl.textContent = "Submit";
        submitButtonEl.addEventListener("click", highScoreHandler);
        enterInitialsEl.appendChild(submitButtonEl);
};

// when initials are saved, user input + "-" + timeLeft should be saved into localStorage (set item and JSON stringify)
// when high scores page is shown again, it should pull that data out of localStorage (get item and JSON parse)

function highScoreHandler(event) {
  event.preventDefault();
  //grab value user inputs in the input element with name below 
  var initialsInput = document.querySelector("#initials-holder").value;

   // has data attribute, so get score id and then call function to finish showing high scores
   // package up data as an object
    var highScoreObj = {
      name: initialsInput,
      score: timeLeft, 
      id: scoreIdCounter
    };   
    // send it as an argument to createScoreList
    createScoreList(highScoreObj);
    viewHighScores();
};

function createScoreList(highScoreObj) {

  var orderListItem = document.querySelector(".order-item");

    //create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "score-item";

  //add score id as a custom attribute
  listItemEl.setAttribute("score-id", scoreIdCounter);
  
  listItemEl.textContent = highScoreObj.name + " - " + highScoreObj.score;
  orderListItem.appendChild(listItemEl);


   highScoreObj.id = scoreIdCounter;
  // scoreIdCounter++;

  highScore.push(highScoreObj);

  //sorting of scores
  highScore.sort((a, b) => b.score - a.score);
  // save to localStorage
  saveScore();
};


function saveScore() {  
  localStorage.setItem("highScore", JSON.stringify(highScore));
};


  function loadScores() {
    var savedScores = localStorage.getItem("highScore");

    if (!savedScores) {
      debugger;
      return false;
    } 

    savedScores = JSON.parse(savedScores);

    for (var i = 0; i < savedScores.length; i++) {
      createScoreList(savedScores[i]);
    }
};

function viewHighScores() {
  quizContainer.style.display = "none";
  scoreContainerEl.style.display = "none"
  
  highScoreContainer.style.display = "flex";
  highScoreHeader.textContent = "High scores";
  
  if(document.getElementById("go-back") == null){

    var buttonsDivEl = document.createElement("div");
    buttonsDivEl.className = "btn-container col-3";
    highScoreContainer.appendChild(buttonsDivEl);

    var goBackButton = document.createElement("button");
    goBackButton.className = "btn";
    goBackButton.id = "go-back";
    
    goBackButton.textContent = "Go back";
    goBackButton.addEventListener("click", quizRestart); 
    buttonsDivEl.appendChild(goBackButton);

    var clearScoresButton = document.createElement("button");
    clearScoresButton.className = "btn";
    
    clearScoresButton.textContent = "Clear high scores";
    clearScoresButton.addEventListener("click", deleteScores);
    buttonsDivEl.appendChild(clearScoresButton);
  }
};

function deleteScores() {
  localStorage.removeItem("highScore");
  quizRestart();
  viewHighScores();
}

var quizRestart = function() {
  document.location.reload();
}

// should make countdown only call once
function countdownStart() {
  if (!timerStart) countdown();
}

// Timer that counts down
function countdown() {
  timerStart = true;
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  intervalId = setInterval(function () {
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
      if (timeLeft < 0) {
        timeLeft = 0;
      }
      // Call the function to end quiz
      quizEnd(); 
    }
  }, 1000);
}

loadScores();