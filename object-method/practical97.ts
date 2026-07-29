// closure

// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }

// const fn = outer();

// fn();
// fn();
// fn();

// practice 2

// function outer() {
//     let count = 1; 

//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner
// }
// const a = outer();
//  a();
//  a();

// practice 3 

// function  outer () {
//     let count = 0;

//      return function () {
//         count++
//         return count;
//      }
    
// }
// const a = outer();
// const b = outer();
// console.log(a());
// console.log(a());
// console.log(b());
// console.log(b());


// practice 4 

// function outer () {
//     let value  = 5;

//     return function () {
//         value += 5
//         console.log(value);
//     }
// }
// const x = outer();
// x();
// x();

// practical 5 

// function outer() {
//     let count = 0;

//     return function () {
//         count++;
//         return count;
//     };
// }

// const a = outer();

// console.log(a());
// console.log(a());

// const b = outer();

// console.log(b());
// console.log(a());

// practice 6
function outer() {
    let value = 10;

    return {
        increment: function () {
            value++;
        },

        getValue: function () {
            return value;
        }
    };
}

const obj = outer();

obj.increment();
obj.increment();

console.log(obj.getValue());