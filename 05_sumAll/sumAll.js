const sumAll = function(a,b) {
    let sum = 0;
    if (typeof(a)!= 'number' || typeof(b)!= 'number') return 'ERROR';
    if (a < 0 || b < 0) return 'ERROR';
    min = Math.min(a,b);
    max = Math.max(a,b);
    for (i = min; i <= max; i++){
        sum += i ;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
