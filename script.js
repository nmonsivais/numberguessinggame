var secretNumber = 4;
var guess = prompt("Guess a number");

//check is User guesses correctly

if (Number(guess) === secretNumber) {
    alert("You guessed my number!");
}

else if (Number(guess) > 4) {
    alert("Your guess is too high!  Try again.");
}

else {
    alert("Your guess is too low.  Try again.");
}