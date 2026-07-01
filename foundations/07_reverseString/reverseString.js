const reverseString = function (str) {
  return str.toLowerCase().split("").reverse().join("");
};

console.log(reverseString("Hello there"));

// Do not edit below this line
module.exports = reverseString;
