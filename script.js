var secretNumber = 4;
var guess = prompt("Guess a number");
var numberGuess = Number(guess);

//check is User guesses correctly

if (numberGuess === secretNumber) {
    alert("You guessed my number!");
}

else if (numberGuess > 4) {
    alert("Your guess is too high!  Try again.");
}

else {
    alert("Your guess is too low.  Try again.");
}