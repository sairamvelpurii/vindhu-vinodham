// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Select elements using classes and IDs
const inputField = document.querySelector('.input input');
const checkButton = document.querySelector('.button-check button');
const resetButton = document.querySelector('.button-reset button');
const container = document.querySelector('.container');

// Create and style a result message paragraph
const resultMessage = document.createElement('p');
resultMessage.style.marginTop = '20px';
resultMessage.style.fontSize = '16px';
resultMessage.style.fontWeight = 'bold';
container.appendChild(resultMessage);

// Handle "Check" button click
checkButton.addEventListener('click', () => {
    const userGuess = Number(inputField.value);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        resultMessage.textContent = '⛔ Enter a number between 1 and 100.';
        resultMessage.style.color = 'red';
    } else if (userGuess === secretNumber) {
        resultMessage.textContent = `🎉 Correct! The number was ${secretNumber}.`;
        resultMessage.style.color = 'green';
        inputField.disabled = true;
        checkButton.disabled = true;
    } else if (userGuess > secretNumber) {
        resultMessage.textContent = '📉 Too high! Try again.';
        resultMessage.style.color = 'blue';
    } else {
        resultMessage.textContent = '📈 Too low! Try again.';
        resultMessage.style.color = 'blue';
    }
});

// Handle "Reset" button click
resetButton.addEventListener('click', () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    inputField.value = '';
    inputField.disabled = false;
    checkButton.disabled = false;
    resultMessage.textContent = '';
});
