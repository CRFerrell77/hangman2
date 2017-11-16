var inquirer = require("inquirer");

letter = function () {
    console.log("this is where the letters will do their thing");
    inquirer.prompt([
    {
        name: "ltr",
        message: "Guess a letter?",
        type: "text"
    }
    ]).then(function(answers) {
        console.log(answers.ltr);
        //run the answer through a comparison for the word chosen
    });

};

module.exports = letter;