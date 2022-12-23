class Geeks {

    // Constructor
    constructor(num1, num2) {
        console.log("Inside Constructor");

        // Initialize class variable
        this.num2 = num2;
        this.num1 = num1;
        }
}

// Initialize the class object
let obj = new Geeks(1, 2);
console.log(obj.num1);
console.log(obj.num2);

class Geeks1 {
    constructor(num1, num2) {
        this.num2 = num2;
        this.num1 = num1;
    }
    add() {
        console.log(
        this.num1 + "+" + this.num2 + "=" + (this.num1 + this.num2));
        }
}
let obj1 = new Geeks1(1, 2);
obj1.add();