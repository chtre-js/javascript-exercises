const repeatString = function(str, val) {
    if (val < 0) console.log("ERROR");
    
    let output = "";
    let i = 0;
    while (i < val) {
        output += str;
        i++;
    }
    console.log(output)
};

repeatString("Hello", 3);


// Do not edit below this line
module.exports = repeatString;
