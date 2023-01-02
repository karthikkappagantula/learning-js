let result;
try {
    console.log("in try block");
    result = x/10;
    console.log("this never runs");
} catch (error) {
    console.log(error.message);
} finally {
    console.log("in finally block")
}

//in success case
let x = 10;
try {
    console.log("in try block");
    result = x/10;
    console.log("this runs since its x/10 is success");
} catch (error) {
    console.log(error.message);
} finally {
    console.log("in finally block")
}