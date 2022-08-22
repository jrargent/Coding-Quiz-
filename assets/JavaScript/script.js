var timeLeft = 10;
var timerEl = document.querySelector("#timer");




// Timer that counts down
function countdown() {
    //set default start time here? or have this return something?
    



    
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

countdown();