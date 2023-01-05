//always refers to an object which current code is running
//this can have different values based on execution context
//      in a method: owner object
//      in a function: global object
//      in an event: element that received the event
//call()/apply() methods refers to object passed in
//'use strict' affects how 'this' is applied