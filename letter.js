var inquirer = require("inquirer");

letter = function (shipLtrs) {
    console.log("letter fucntion letters: " + shipLtrs);

    //Split those letters into an index of the letters in the array

    // for (i = 0; i<shipLtrs.length; i++) {
    //     this.ltr[i] = shipLtrs[i];
    // } 

    

    // console.log("this is where the letters will do their thing");
    // inquirer.prompt([
    // {
    //     name: "ltr",
    //     message: "Guess a letter?",
    //     type: "text"
    // }
    // ]).then(function(answers) {
    //     console.log(answers.ltr);
    //     //run the answer through a comparison for the word chosen
    // });

};

module.exports = letter;