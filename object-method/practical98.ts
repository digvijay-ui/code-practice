// practical 7 

// function outer() {
//     let count = 0;

//     return {
//         add: function () {
//             count++;
//         },

//         show: function () {
//             console.log(count);
//         }
//     };
// }

// const a = outer();
// const b = outer();

// a.add();
// a.add();

// b.add();

// a.show();
// b.show();

// 8 

// function outer() {
//     let count = 100;

//     return {
//         increase: function () {
//             count += 10;
//         },

//         decrease: function () {
//             count -= 20;
//         },

//         show: function () {
//             console.log(count);
//         }
//     };
// }

// const obj = outer();

// obj.increase();
// obj.increase();
// obj.decrease();

// obj.show();

// practical 9

// function outer (){
//     let value = 1;

//       return function (){
//         value *= 2
//         console.log(value);
//       };
// }

// const fn = outer();
// fn();
// fn();
// fn();


// practical 10

function outer () {
  let count = 0;

  return {
    increment : function() {
      count++
      console.log(count);
    },
    reset : function(){
      count = 0
    }
  };
}

const obj = outer();

obj.increment();
obj.increment();
obj.reset();
obj.increment();