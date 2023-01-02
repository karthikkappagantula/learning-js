let productId = 12345; //declared globally. so accessible through out the module
let orderId = 789; //declared globally, but overriden in function
let itemId = 900; //declared globally, but gets shadowed (re-declared)

function showProductId() {
    orderId = 900;
    const itemId = 1000;
    console.log("product:" + productId);
    console.log("order:" + orderId);
    console.log("item:" + itemId);  //here in this function itemId is redeclared. so displays the value of itemId scopped to fucntion
}

showProductId();
console.log("order:" + orderId);
console.log("item:" + itemId); //here itemId re-displays the value from global scope