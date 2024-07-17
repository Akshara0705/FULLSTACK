const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random number:", randomNumber); 

let attempts = 0;
const maxAttempts = 5; 

function guessNumberGame() {
    while (attempts < maxAttempts) {
        let userGuess = prompt(`Guess the number (between 1 and 100). You have ${maxAttempts - attempts} attempts left.`);
        userGuess = parseInt(userGuess);
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            alert("Please enter a valid number between 1 and 100.");
            continue; 
        }
        attempts++;
        if (userGuess === randomNumber) {
            alert("Congratulations! You guessed the number: " + randomNumber + " correctly in " + attempts + " attempts.");
            break; 
        } else if (userGuess < randomNumber) {
            alert("Too low! Try again.");
        } else {
            alert("Too high! Try again.");
        }
    }
    if (attempts === maxAttempts) {
        alert("Sorry, you have used all your attempts. The number was: " + randomNumber);
    }
}
guessNumberGame();
