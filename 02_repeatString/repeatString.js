const repeatString = function(string, num) {
    //get an empty string to put all the repetitions in there.
    let word = "";

    for (let i = 0; i < num; i++) {
        word += string;
    }

    return word;
};

// Do not edit below this line
module.exports = repeatString;
