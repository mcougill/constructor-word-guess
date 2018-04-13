//require external files
var inquirer = require('inquirer');
var words = require('./Word.js');
var checkLetter = require('./Letter.js');

//Holds the word list from Word.js
var wordObject = words.Word.wordFunctions;



//Holds the functions from the constructor in Letter.js
var letterObject = checkLetter.Letter.letterFunctions;

var currentWord;
var emptyWord;
var lives;
var attempts;

chosenWord();
letterGuess();

function chosenWord() {

    //select random word from Word.js
    currentWord = wordObject.wordList[Math.floor(Math.random() * wordObject.wordList.length)];
    emptyWord = "";

    for (i = 0; i < currentWord.length; i++) {
        emptyWord += '_ ';
    }

    lives = 15;
    attempts = [];

}





function letterGuess() {
    console.log(emptyWord);

    inquirer.prompt([
        {
            type: "input",
            message: "Please Guess a Letter",
            name: "letter"
        },
    ])
        //callback after user input prompt
        .then(function (user) {
            var userGuessLetter = user.letter.toLowerCase();
            var isLetter = letterObject.checkLetter(userGuessLetter);
            var inWord = false;

            if (isLetter) {
                for (i = 0; i < currentWord.length; i++) {
                    if (userGuessLetter == currentWord[i]) {
                        emptyWord = letterObject.replaceLetter(emptyWord, i * 2, userGuessLetter);
                        inWord = true;
                    }
                }

                if (!inWord && !letterObject.inArray(userGuessLetter, attempts)) {
                    attempts.push(userGuessLetter);
                    lives--;
                }

                //series of gameplay messages
                console.log("You have " + lives + " lives left");

                console.log("Letters Guessed: " + attempts);

                console.log("");
                if (lives === 0) {
                    console.log("e kala mai iaʻu! You Lose!");

                    console.log("The word was " + currentWord + "!");

                    newRound();
                }

                else if (emptyWord.indexOf("_") === -1) {
                    console.log("Mau hoohiwahiwa! You win!");

                    console.log("The word was " + currentWord + "!");

                    newRound();
                }



                else {
                    letterGuess();
                }
            }

            else {
                console.log("That was not a letter. Please enter a letter A-Z.");


                letterGuess();
            }

        });
}



//prompt to play again 
function newRound() {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to play again?",
            name: "again"
        },
    ])
        //callback to quit/restart game
        .then(function (user) {
            if (user.again) {
                console.log("");
                chosenWord();
                letterGuess();
            } else {
                console.log("Aloha! Bye bye!");
            }
        });
}


