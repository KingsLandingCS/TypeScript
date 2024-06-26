"use strict";
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(10, 20));
console.log(add(10, 20, 25));
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(10, 20));
console.log(sub(10, 20, 5));
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(10, 20));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c", "d", "e"]);
