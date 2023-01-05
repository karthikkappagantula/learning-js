let arr1 = [1, 2, 3];
//concat array
let arr2 = [...arr1, 4, 5, 6];
console.log("arr2: " + arr2);
//copy array - copied here by reference.
let arr3 = [...arr2];
console.log("arr3: " + arr3);

//spread operator in constructor
let dt = new Date(2019, 10, 15);
console.log(dt);

let date = [2019, 10, 16];
dt = new Date(...date);
console.log(dt);

//pass as params
multipleParams(1, 2, 3);
let args = [1, 2, 3];
multipleParams(...args);

function multipleParams(arg1, arg2, arg3) {
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
}

//perfrom a shallow copy of object literals
objectLiterals();
function objectLiterals() {
    let product = {
        productId: 123,
        cost: 450,
        name: "toycar"
    };

    let prod1 = {...product};

    prod1.productId = 999;

    console.log(product);
    console.log(prod1);
}