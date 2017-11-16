var inquirer = require("inquirer");
var fs = require("fs");
var word = require("./word.js");
var letter = require("./letter.js");

var thisRndShip = "";

hangman = function () {
    word();
    //letter();
};

logger = function (data) {
    //console.log(input);
    data = data + "\n"
    fs.appendFile("logs.txt", data, function (err, data) {
        if (err) {
            return console.log(err);
        } 
    }
)};

again = function() {
    inquirer.prompt([
    {
        type: "confirm",
        name: "goagain",
        message: "Would you like go again?"
    }
    ]).then(function(answers) {
        //console.log(answers.goagain);
        if (answers.goagain) {
            hangman();
        } else {
            return;
        };
    });
};

hangman();
