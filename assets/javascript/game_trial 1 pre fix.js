// Variables
// ================================

// Array of possible countries for the computer to select.
var computerOptions = ["united states", "mexico", "canada", "panama", "cuba", "antigua and barbuda"];

// Array for blank letters, splitting into seperate strings, and replacing with blanks from computer selection.
var computerBlanks = [];
var toSplit = [];
var toReplace = [];

// Array of letters that the user has guessed.
var validGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuesses = [];

// Variables for score and guesses.
var wins = 0;
var losses = 0;
var startingGuesses = 10;
var remainingGuesses = startingGuesses;
var roundResult = "No round has been completed"; 

// Declaring variables that hold reference to HTML items.
var directionsText = document.querySelector("#directions-text");
var winsText = document.querySelector("#wins-text");
var lossesText = document.querySelector("#losses-text");
var guessesRemainingText = document.querySelector("#guessesRemaining-text");
var lettersGuessedText = document.querySelector("#lettersGuessed-text");
var roundResultText = document.querySelector("#roundResult-text");
var computerSelection = "0";
var computerBlanksText = document.querySelector("#computerBlanks-text");

// Functions
// ================================

function gameReset () {
    computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)]
    console.log(computerSelection);
};

function selectionSplitter () {
    var toSplit = computerSelection;
    console.log("To Split Array: " + toSplit);
    var toReplace = toSplit.split("");
    document.querySelector("#computerSelection-text");
    console.log("To Replace Array: " + toReplace);
}

function selectionReplacer () {
    var toReplace = computerSelection;
    var computerBlanks = toReplace.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/g, "_");
    computerBlanksText.textContent = "Name the Country " + computerBlanks;
    console.log(computerBlanks);
}

// Main Processes
// ================================

// Reset function to start the game
gameReset();
selectionSplitter();
selectionReplacer();

document.onkeyup = function(event) {

    var userGuess = event.key;

    // if (userGuess === validGuesses) {
        console.log(userGuess);
        for (i = 0; i < computerSelection.length; i++) {
            if (userGuess === toReplace[i]) {
                computerBlanks.replace(/_/g, userGuess);
            } else {
                console.log("Incorrect Guess")
            };
        };
    // } else {
    //     alert("Please enter a letter to make a guess")
    // };
    
    lettersGuessedText.textContent = "Your guesses so far: " + userGuesses;
    guessesRemainingText.textContent = "Guesses remaining: " + remainingGuesses;
};