// //  Var
// var funcs = [];


// for (var i = 0; i < 5; i++) {
//     funcs.push(function () {
//         console.log(i)
//     });
// }

// funcs[0](); //logs 5
// funcs[1](); //logs 5
// funcs[4](); //logs 5

// // interviewer: what will the following code output?
// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//     setTimeout(function () {
//         console.log('Index: ' + i + ', element: ' + arr[i]);
//     }, 3000);
// }

//O/P =4

//  Let
console.log('By Using Let')
var funcs = [];

for (let i = 0; i < 5; i++) {
    funcs.push(function () {
        console.log(i)
    });
}

funcs[0](); //logs 5
funcs[1](); //logs 5
funcs[4](); //logs 5

// interviewer: what will the following code output?
const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}

//O/P =4