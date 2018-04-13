
// create constructor 
function Letter() {

    // A string value to store the underlying character for the letter
    this.checkLetter = function (letter) {
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        for (var i = 0; i < alphabet.length; i++) {

            //validate user input is a letter
            if (letter == alphabet[i]) {
                return true;
            }
        }
        return false;
    }

    //Checks if guess is in an array
    this.inArray = function (letter, arr) {

        for (i = 0; i < arr.length; i++) {
            // A boolean value that stores whether that letter has been guessed yet
            if (arr[i] == letter) {
                return true;
            }
        }
        return false;
    }


    // A function that returns the underlying character if the letter has been guessed
    this.replaceLetter = function (repl, i, letter) {
        return repl.substr(0, i) + letter + repl.substr(i + 1);
    }


}

var letterFunctions = new Letter();


exports.Letter = {
    letterFunctions: letterFunctions
}