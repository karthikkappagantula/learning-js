//helps iterate over an array, string etc
let names = ["karthik", "gayatri", "eeshan", "advait"];
for (const item of names) {
    console.log(item);
}


let products = [
    {
    "productId" : 680,
    "name" : "box-of-chocolates",
    },
    {
    "productId" : 120,
    "name" : "box-of-flowers",
    },
    {
    "productId" : 001,
    "name" : "box-of-goodies",
    },
    ]

for (const item of products) {
    console.log(JSON.stringify(item));
}