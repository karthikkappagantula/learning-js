let product = {
    "productId" : 680,
    "name" : "box-of-chocolates",
    "calculateCost" : function () {
        console.log("20 INR");
    }
}

//for-in allows you to iterate over a collection to get Key and Values
for (const key in product) {
    console.log("'" + key + "'=" + product[key]);
}