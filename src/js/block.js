// Block Scoping

console.log(a);
//variable is not hoisted
//console.log(b);
//console.log(c);
var a = "hello world";
const b = "constant";
let c = "hello world";

console.log(a);
console.log(b);
console.log(c);

console.log(window.a);
console.log(window.b); //undefined
console.log(window.c); //undefined