const totalIntegers = function(target) {
  if (typeof target !== "object" || target === null) {
    return undefined;
  }

  return Object.values(target).reduce((count, value) => {
    if (typeof value === "object" && value !== null) {
      return count + totalIntegers(value);
    }
    return count + (Number.isInteger(value) ? 1 : 0);
  }, 0)
};

// Do not edit below this line
module.exports = totalIntegers;
