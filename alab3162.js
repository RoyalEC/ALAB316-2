//Interact with the BOM using Javascript
//Use user input to dynamically alter the DOM

document.addEventListener("DOMContentLoaded", function () {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let tries = 0;

  function checkGuess() {
    const guess = parseInt(document.getElementById("guessInput").value, 10);
    tries++;
    let message = "";

    if (guess > secretNumber) {
      message = "Too high!";
    } else if (guess < secretNumber) {
      message = "Too low!";
    } else {
      message = `That's it! You got it in ${tries} guesses.`;
      setTimeout(() => alert(message), 100);
      return;
    }

    document.getElementById("result").textContent = message;
    setTimeout(requestGuess, 100);
  }

  function requestGuess() {
    const guess = prompt("Enter a guess:");
    if (guess !== null) {
      document.getElementById("guessInput").value = guess;
      checkGuess();
    }
  }

  requestGuess();
});
