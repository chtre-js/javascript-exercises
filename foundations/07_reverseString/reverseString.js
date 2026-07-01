const reverseString = function (str) {
  let arr = str.toLowerCase().split("");
  let reversedArr = [];

  arr.forEach((element) => {
    reversedArr.unshift(element);
  });

  output = reversedArr.join("");
  return output;
};

console.log(reverseString("Hello there"));

// Do not edit below this line
module.exports = reverseString;
