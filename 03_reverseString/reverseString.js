const reverseString = function(string) {
    let split =  string.split("");
    let reverse = split.reverse();
    return reverse.join("")
};

console.log(reverseString('teste'))

// Do not edit below this line
module.exports = reverseString;
