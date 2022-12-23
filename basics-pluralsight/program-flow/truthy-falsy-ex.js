//falsy --> false, 0, "", '', null, undefined, NaN
//truthy --> everything not false => true, 1, "0", '2'

if ("0") {
    console.log("this runs");
}
if (0) {
    console.log("this runs?? should not"); //does not run
}