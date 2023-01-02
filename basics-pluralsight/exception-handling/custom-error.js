let result;

try {
    customException();
} catch (error) {
    console.log(error.message);
    console.log(error.name);
}

function customException() {
    try {
        result = x/10;
    } catch (error) {
        throw {
            "message" : "failed in method xxx doing division " + error.message,
            "name" : "customError"
        };
    }
}

// type of errors in js
// * ReferenceError - undefined types/objects referenced
// * RangeError - errors caused by precision with numeric values
// * TypeError - occurs when an operation cannot be performed on the data type
// * URIError - unavailable URI
// * SyntaxError - syntax error. this can likely be simulated in web dev using html/css
// * EvalError  -  occurs in older browsers when using latest js features