// testing 

// export function countVowel(str: string) : number{
//        let vowel = "a,e,i,o,u";
//     let count = 0;
    
//     for (let i = 0; i<str.length; i++){
//       if (vowel.includes(str[i])){
//         count++
//       }
//     }
// return count
// }
// console.log(countVowel("hello"))

// 

// type User = {
//   id: number;
//   name: string;
//   active: boolean;
// };

// function getActiveUsers(users: User[]): User[] {
//   const result : User[] = [];
//   for (let i = 0; i<users.length; i++){
//    if( users[i].active === true) {
//     result.push(users[i])
//   }
// }
//   return result
// }

//
// console.log("A");

// Promise.resolve().then(() => {
//   console.log("B");
// });

// console.log("C");

//
// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("3");
// });

// console.log("4");

//
// let name = "Global";

// function outer() {
//   let name = "Outer";

//   function inner() {
//     console.log(name);
//   }

//   inner();
// }

// outer();

// console.log("A");

// async function test() {
//   console.log("B");

//   await Promise.resolve();

//   console.log("C");
// }

// test();

// console.log("D");


let x = 10;

function outer() {
  let x = 20;

  return function inner() {
    console.log(x);
  };
}

const fn = outer();

x = 30;

fn();