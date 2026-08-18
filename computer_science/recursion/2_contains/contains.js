const contains = function(object, value) {
  if (typeof object !== "object") {
    return undefined;
  }
  if (Object.values(object).includes(value)) {
    return true;
  } 
  for (const subobject of Object.values(object)) {
    if (typeof subobject === "object" && subobject !== null && contains(subobject, value)) {
      return true;
    }
  }
  return false;
};

const object = {
  "one": 1,
  "two": 2,
  "sub": {
    "three": 3,
    "four": 4,
    "yes": "yes",
    "number": "44",
  }
}

console.log(contains(object, 3));
console.log(contains(object, "yes"));
console.log(contains(object, 4));
console.log(contains(object, 44));
// Do not edit below this line
module.exports = contains;
