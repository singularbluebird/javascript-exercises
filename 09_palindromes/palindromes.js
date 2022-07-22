const palindromes = function (word) {
    word = word.toLowerCase();
    word = word.split("");
    const punct = word.filter(letter => (letter !== "." && 
    letter !== "!" && letter !== " " && letter !== "," && letter !== "?"));
    word = punct.join("");
    return (word.split("").reverse().join("") === word);
};

// Do not edit below this line
module.exports = palindromes;
