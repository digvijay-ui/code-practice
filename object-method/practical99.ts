//practical 10 

// function outer () {
//     let count = 5

//      return  {
//         add : function () {
//          count += 5
//         }, 
//         subtract : function() {
//             count -= 2
//         },
//         show : function() {
//             console.log(count);
//         }
//      };
// }

// const obj = outer();
// obj.add();
// obj.subtract();
// obj.add();

// obj.show();

// practical 11

// function outer () {
//     let count = 1;

//     return {
//         double : function() {
//             count *= 2
//         },
//         addThree : function () {
//             count += 3
//         },
//         show : function (){
//             console.log(count);
//         }
//     };
// }

// const obj = outer();

// obj.double();
// obj.addThree();
// obj.double();

// obj.show();

//  practical 12 

// function outer () {
//     let count =   10;

//     return {
//         increase : function (){
//             count += 5;
//         },
//         decrease : function () {
//             count -= 3;
//         },
//         show : function () {
//             console.log(count);
//         }
//     };

// }

// const a = outer();
// const b = outer();

// a.increase();
// a.increase();

// b.decrease();

// a.show();
// b.show();

// practical13

// function outer() {
//         let count = 0;

//         return function() {
//           count++;
//           return count
//         };
// }

// const a = outer();
// const b = outer();

// console.log(a());
// console.log(b());
// console.log(a());
// console.log(b());

//  practical 14
// function outer() {
//         let count = 0;

//         return  {
//           increment : function () {
//           count++
//           return count;
//         },

//         getCount : function () {
//             return count;
//         }
//    };
// }

// const obj = outer();

// console.log(obj.increment());
// console.log(obj.getCount());
// console.log(obj.increment());
// console.log(obj.getCount());



// function makeFunctions(): (() => void)[] {
//   var funcs: (() => void)[] = [];
//   for (var i = 0; i < 3; i++) {
//     funcs.push(function (): void {
//       console.log(i);
//     });
//   }
//   return funcs;
// }

// const funcs: (() => void)[] = makeFunctions();
// funcs[0]();
// funcs[1]();
// funcs[2]();


function delayedLogs(): void {
  for (let i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}

delayedLogs();

function createCounter() {
    let count = 0; 

    return function() {
        count++
    };
}
