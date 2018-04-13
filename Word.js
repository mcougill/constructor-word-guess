var letterCheck = require('./Letter.js');
var letterObject = letterCheck.Letter.letterFunctions;	

function Word() {
    this.wordList = ["pineapple", "beach", "tropical", "luau", "waikiki", "aloha", "maui", "coconut", "snorkeling", "volcano", "surfboard", "pig", "lei", "fish"];
};

//instatitation 
var wordFunctions = new Word();




exports.Word = {
    wordFunctions: wordFunctions
}




