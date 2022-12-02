const leapYears = function(year) {
    return (year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0))
};


console.log(leapYears(2000))
// Do not edit below this line
module.exports = leapYears;

// is divisible by 4?
// is not divisible by 100?
// is divisible by 400