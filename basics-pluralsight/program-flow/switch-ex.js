let a = 10;

switch (a > 0) {   
    case false:
        console.log("a is less than 0"); break;
    case true:
        console.log("a is greater than 0"); break;
    default:
        console.log("a is equal to 0"); break;
}

switch (true) {   
    case (a < 0):
        console.log("a is less than 0"); break;
    case (a > 0):
        console.log("a is greater than 0"); break;
    default:
        console.log("a is equal to 0"); break;
}


let color = "Green";
switch(color) {
    case "Red":
        console.log("color is Red"); break;
    case "Green":
        console.log("color is Green");
    default:
        console.log("no color");
}  // this prints "no color" as there is no break statement in case got "Green"

//multiple case statements
switch(color) {
    case "Red":
    case "Green":
        console.log("color is Red/Green");
        break;
    default:
        console.log("no color");
        break;
}

//switch-case does a strict comparision
let productId = "1";
switch (productId) {
    case 1:
        console.log("value is 1"); break;
    case 2:
        console.log("value is 2"); break;
    default:
        console.log("no value"); break;
}