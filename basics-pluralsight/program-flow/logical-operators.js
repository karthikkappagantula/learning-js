//&& - and
//|| - or
//! - not

//operator order of precedence - js follows BODMAS order of precedence


//short cicuiting (&&) - only one expression is evaluated to determing if other should run
let result;
result = isColorRed("black") && isGreaterThan1400(1400); //here isGreaterThan1400 is never executed as isColorRed is evaluated to false
console.log(result);
result = isColorRed("Red") || isGreaterThan1400(200); //here isGreaterThan1400 is never executed as isColorRed is evaluated to true
console.log(result);

function isColorRed(value){
    console.log("in isColorRed fn");
    return value === "Red";
}

function isGreaterThan1400(value){
    console.log("in isGreaterThan1400 fn");
    return value > 1400;
}