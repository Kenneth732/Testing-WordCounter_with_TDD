// Retrieve necessary elements from the DOM
const guessInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-button');
const messageContainer = document.getElementById('message-container');

// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;

// Add event listener to the submit button
submitButton.addEventListener('click', function() {
  const userGuess = parseInt(guessInput.value);

  for (let attempts = 1; attempts <= 5; attempts++) {
    if (userGuess === targetNumber) {
      messageContainer.textContent = 'Congratulations! You guessed the correct number.';
      return;
    } else if (userGuess < targetNumber) {
      messageContainer.textContent = 'Too low! Guess higher.';
    } else {
      messageContainer.textContent = 'Too high! Guess lower.';
    }
  }

  // If the loop ends without a correct guess
  messageContainer.textContent = `Game over! The correct number was ${targetNumber}.`;
});
