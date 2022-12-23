function getSecretCode(value) {
    let code = value * 42;
    console.log(code); //displays
    return code;
}

let secretCode = getSecretCode(2);
console.log(code); //gives ReferenceError