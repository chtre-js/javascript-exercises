const convertToCelsius = function(fahrenheit) {
  let converted = (fahrenheit - 32) * (5/9);
  let output = parseFloat(converted.toFixed(1));
  return output;
};

const convertToFahrenheit = function(celsius) {
  let converted = celsius * (9/5) + 32;
  let output = parseFloat(converted.toFixed(1));
  return output;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
