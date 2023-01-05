// 'use strict';
console.log("start");
console.log("global -->" + this.toString());
functionScope();

function functionScope() {
    console.log("function -->" + this.toString());
}