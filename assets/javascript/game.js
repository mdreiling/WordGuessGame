// Variables
// ================================

// Array of possible countries for the computer to select.
var computerOptions = ["United States", "Mexico", "Canada", "Panama", "Cuba", "Antigua and Barbuda"];

// Array for blank letters from computer selection.
var computerBlanks = [];

// Array of letters that the user has guessed.
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
// ===============================

function gameReset () {
    computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)]
    console.log(computerSelection);
};

function selectionSplitter () {
    var toSplit = computerSelection;
    var computerBlanks = toSplit.split("");
    document.querySelector("#computerSelection-text");
    computerBlanksText.textContent = "Name the Country " + computerBlanks;
    console.log(computerBlanks);
}

// function selectionReplacer () {
//     var toReplace = computerBlanks;

// }

// Main Processes
// ===============================

// Reset function to start the game
gameReset();
selectionSplitter();

document.onkeyup = function(event) {

    var userGuess = event.key;

    if (userGuess != 0) {
        console.log("Test")
        wins++;
    } else {
        losses++;
    };

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;

};