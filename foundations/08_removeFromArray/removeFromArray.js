const removeFromArray = function(arr, ...args) {
    return arr.filter((val) => !args.includes(val))
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // should remove 3 and return [1,2,4]

// Do not edit below this line
module.exports = removeFromArray;
