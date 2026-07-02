const sumAll = function(a, b) {
    let start = a, end = b;

    if (a > b) [start, end] = [end, start];

    let arr = [];

    for (let i = start; i <= end; i++) {
        arr.push(i);
    }

    let output = arr.reduce((sum, current) => sum + current, 0);

    return output;
};

console.log(sumAll(100, 1));

// Do not edit below this line
module.exports = sumAll;
