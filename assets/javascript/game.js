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
var startingGuesses = 15;
var remainingGuesses = startingGuesses;

// Declaring variables that hold reference to HTML items.
var directionsText = document.querySelector("#directions-text");
var winsText = document.querySelector("#wins-text");
var lossesText = document.querySelector("#losses-text");
var guessesRemainingText = document.querySelector("#guessesRemaining-text");
var lettersGuessedText = document.querySelector("#lettersGuessed-text");
var computerSelection = "0";
var computerBlanksText = document.querySelector("#computerBlanks-text");

// Setting variable for User Guess to check if it matches a letter in the word.
var letterToCheck = true;
var letterCheckArray = [];

// Functions
// ================================

function gameReset () {
    computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)]
    console.log(computerSelection);
    for (var i = 0; i < computerSelection.length; i++) {
        answerArray[i] = "_";
        }
    console.log(answerArray.join(" "));
    computerBlanksText.textContent = answerArray.join(" ");
    remainingLetters = computerSelection.length;
    userGuesses = [];
    remainingGuesses = startingGuesses;
};

// function letterCheck () {
//     letterToCheck = reviewLetters() {

//     }
// };

// Main Processes
// ================================

// Reset function to start the game
gameReset();

document.onkeyup = function(event) {

    var userGuess = event.key;
    console.log(userGuess);
    // letterCheck();

    // Alerts user to enter a letter key to make a guess
    if (userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e" || userGuess === "f" || userGuess === "g" || userGuess === "h" || userGuess === "i" || userGuess === "j" || userGuess === "k" || userGuess === "l" || userGuess === "m" || userGuess === "n" || userGuess === "o" || userGuess === "p" || userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" || userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "x" || userGuess === "y" || userGuess === "z") {

        // Game Continuation Logic - Loss Condition: Check for loss by making sure there are Guesses Remaining.
        if (remainingGuesses < 1) {
            console.log("You Lose");
            losses++;
            answerArray = [];
            gameReset();
        } 

        // Game Continuation Logic - Win Condition: Check for win by checking the number of remaining letters in the chosen word.
        else if (remainingLetters < 1) {
            console.log("You Win!");
            wins++;
            answerArray = [];
            gameReset();
        } 
        
        // Game Continuation Logic - Game Continues...
        else {

            // Game Logic for entering correct guesses.
            for (var j = 0; j < computerSelection.length; j++) {
                if (computerSelection[j] === userGuess) {
                    answerArray[j] = userGuess;
                    console.log(answerArray.join(" "));
                    computerBlanksText.textContent = answerArray.join(" ");
                    remainingLetters--;
                    console.log("Remaining Letters: " + remainingLetters);
                }
            }
            userGuesses.push(" " + userGuess);
            remainingGuesses--;
        }

        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesRemainingText.textContent = "Guesses remaining: " + remainingGuesses;
        lettersGuessedText.textContent = "Letters Guessed: " + userGuesses;

    } else {
        alert("Please enter a letter to make a guess")
    };
};
