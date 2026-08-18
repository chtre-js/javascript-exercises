function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

const factorial = function (n) {
  if (typeof n === "object" || typeof n === "string" || n < 0 || isFloat(n)) {
    return undefined;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(1));

// Do not edit below this line
module.exports = factorial;
