const removeFromArray = function(...arg) {
    const array = arg[0];
    return array.filter(element => !arg.includes(element))
};

console.log(removeFromArray([1, 2, 3, 4], 3))
// Do not edit below this line
module.exports = removeFromArray;
