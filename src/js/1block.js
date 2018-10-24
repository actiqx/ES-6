// Block Scoping- Whatever is inside the {} is the scope of the object

console.log(a);
//variable is not hoisted in let or constant
//console.log(b);
//console.log(c);
var a = "hello world";
const b = "constant";
let c = "hello world";
// const is immuatable
//b = "pinky";
c = "pinky"

console.log(a);
console.log(b);
console.log(c);

console.log(window.a);
console.log(window.b); //undefined
console.log(window.c); //undefined