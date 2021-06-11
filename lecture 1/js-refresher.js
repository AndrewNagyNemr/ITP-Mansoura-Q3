// running in different env

// const and let vs var

// const x = 1;
// let y = 1;

// for (let i = 0; i < 5; i++) {
//     console.log(i);    
// }

// console.log(i) // i is not defined
// console.log(i) // i is not defined

// let i;
// i=1
// console.log(i);

// const x =1
// x=2
// console.log(x);

// const x;


//not-defined //undefiend

// arrow functions
// add(1, 2)

// function add(x, y) {
//     return x + y
// }

// const add = function (a, b) {
//     return a + b
// }
// const add = (a, b) => (a + b)

// const add = a => (a + 1)


// add(1, 2)


// array method 

// const arr = [1, 2, 3, 4];

// const arr2 = arr.map((x)=> x*2 )

// const arr2 = arr.filter((x)=> x%2 === 0)
// const arr2 = arr.filter((x)=> x*2)
// const arr2 = arr.filter((x)=> x*0)
// const arr2 = arr.find((x)=> x%2===0)
// const arr2 = arr.find((x)=> true)

// console.log(arr2);

// object and array destructuring 

// const person = {
//     name : "Andrew",
//     age : 28
// }

// const {name : personName} = person;
// const {age} = person;

// const nums = [1, 2, 3];

// const [first, sec, third]= nums

// a-synchronous Js

console.log("first");

setTimeout(()=>{
    console.log("second");
}, 1000)

setTimeout(()=>{
    console.log("last");
}, 1)

console.log("third");

//package manager