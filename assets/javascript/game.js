// Variables
// ================================

// Array of possible countries for the computer to select.
var computerOptions = ["brazil", "mexico", "canada", "spain", "cuba", "japan", "china", "india", "turkey", "germany"];

// Array for blank letters based off of computer selection.
var answerArray = [];


// Array of letters that the user has guessed.
var validGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuesses = [];

// Variables for score and guesses.
var wins = 0;
var losses = 0;
var startingGuesses = 10;
var remainingGuesses = startingGuesses;

// Declaring variables that hold reference to HTML items.
var directionsText = document.querySelector("#directions-text");
var winsText = document.querySelector("#wins-text");
var lossesText = document.querySelector("#losses-text");
var guessesRemainingText = document.querySelector("#guessesRemaining-text");
var lettersGuessedText = document.querySelector("#lettersGuessed-text");
var computerSelection = "0";
var computerBlanksText = document.querySelector("#computerBlanks-text");

// Functions
// ================================

function gameReset () {
    computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)]
    console.log(computerSelection);
    for (var i = 0; i < computerSelection.length; i++) {
        answerArray[i] = "_";
        }
    console.log(answerArray.join(" "));
    computerBlanksText.textContent = "Guess the Country: " + answerArray.join(" ");
    remainingLetters = computerSelection.length;
};

// Main Processes
// ================================

// Reset function to start the game
gameReset();

document.onkeyup = function(event) {

    var userGuess = event.key;
    console.log(userGuess);

    if (remainingGuesses <= 0) {
        console.log("You Lose");
        losses++;
        gameReset();
    } else if (remainingLetters <= 0) {
        console.log("You Win!");
        wins++;
        gameReset();
    } else {
        for (var j = 0; j < computerSelection.length; j++) {
            if (computerSelection[j] === userGuess) {
                answerArray[j] = userGuess;
                console.log(answerArray.join(" "));
                computerBlanksText.textContent = "Guess the Country: " + answerArray.join(" ");
                remainingLetters--;
                console.log("Remaining Letters: " + remainingLetters);
            }
        }
        userGuesses.push(" " + userGuess);
    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesRemainingText.textContent = "Guesses remaining: " + remainingGuesses;
    lettersGuessedText.textContent = "Letters Guessed: " + userGuesses;
};

