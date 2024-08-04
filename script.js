const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

let secretNumber = Math.floor(Math.random() * 100) + 1;

submitButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    if (userGuess < 1 || userGuess > 100) {
        resultElement.textContent = 'Please enter a number between 1 and 100.';
    } else if (userGuess === secretNumber) {
        resultElement.textContent = ` Congratulations! You guessed the number: ${secretNumber}`;
    } else if (userGuess < secretNumber) {
        resultElement.textContent = 'Too low! Try again.';
    } else {
        resultElement.textContent = 'Too high! Try again.';
    }
});