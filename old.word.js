var fs = require("fs");
var letter = require("./letter.js");

word = function () {
    fs.readFile("ships.txt", "utf-8", function(err, data) {
		if (err) {
			return console.log(err);
        };
        //console.log("ships from txt file: " + data);
        var newArr = data.split(",");
        var rnd = Math.floor(Math.random()*newArr.length);
        thisRndShip = newArr[rnd];
        console.log("ship to be chopped up on Word function " + thisRndShip);
        logger("Ship Selected: " + thisRndShip);
        splitter(thisRndShip); 
    });    
};

splitter = function (value) {
    var letters = value.split("");
    console.log("letters from splitter function " + letters);
    gameObj(letters);
};

function gameObj (ship) {
    this.ship = ship;
    console.log("gameObj constructor: " + this.ship);
    //letter(this.ship);
};

logger = function (data) {
    console.log("is this thing on? " + data);
    data = data + "\n"
    fs.appendFile("logs.txt", data, function (err, data) {
        if (err) {
            return console.log(err);
        } 
    }
)};

module.exports = word;