var fs = require("fs");

word = function () {
    fs.readFile("ships.txt", "utf-8", function(err, data) {
		if (err) {
			return console.log(err);
        };
        //console.log(data);
        var newArr = data.split(",");
        var rnd = Math.floor(Math.random()*newArr.length);
        var thisRndShip = newArr[rnd];
        console.log(thisRndShip);
        logger("Ship Selected: " + thisRndShip);
        splitter(thisRndShip); 
    });    
};

splitter = function (value) {
    var letters = value.split("");
    console.log(letters);
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

module.exports = word;