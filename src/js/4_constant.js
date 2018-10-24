//const API_KEY; //Missing initializer in const declaration
const API_KEY = '123';

const name = 'Daniel';

//name = 'Brian'; //throws a TypeError: Assignment to constant variable

const names = ['Liam', 'Daniel'];

names.push('Abdi'); //works as expected without throwing error

console.log(names[2]);