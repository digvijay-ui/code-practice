// async/ await
export async function getData() : Promise<any> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();

        return data;
    }catch (error) {
       console.log("Error:" , error)
    }
} 

getData().then((data) => {
    console.log(data)
})

// Array + TypeScript

const Users = [
  { name: "A", age: 17 },
  { name: "B", age: 22 },
  { name: "C", age: 15 },
  { name: "D", age: 20 }
]
const findAge = Users.filter((user) => {
    return user.age >= 18;
})
console.log(findAge);

console.log("A");

Promise.reject("Failed")
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Done");
  });

console.log("B");

// two sum 

const number = [2, 7, 11, 15];

let target = 9;

for(let i = 0; i<number.length; i++){
    for(let j = i + 1; j<number.length; j++){
        if(number[i] + number[j] === target){
            console.log(number[i], number[j]);
        }
    }
}

// triangle star pattern 

for (let i = 1; i<=5; i++){
    let row = ""

    // for space 

    for (let space = 1; space<= 5 - i; space++){
        row =row + " "
    }

    // for triange
    for(let star = 1; star<= 2 * i -1; star++){
        row = row + "*"
    }
    console.log(row)
}

// Write a TypeScript function that returns the first duplicate number in an array.

export function firstDuplicate (arr : number[]) : number {
    let seen : number[] = [];

    for(let i = 0; i<arr.length; i++){
        if(seen.includes(arr[i])){
            return arr[i]
        }
        seen.push(arr[i])
    }
    return -1
}
console.log(firstDuplicate([1,2,4,2,5]))


// Sum of Unique Numbers

export function sumUnique(num : number[]) : number {
    let sum = 0;

    for (let i = 0; i<num.length; i++){
        if(num.indexOf(num[i]) === num.lastIndexOf(num[i])){
            sum = sum + num[i]
        }
    }
    return sum
}
console.log(sumUnique([1,4,6,2,4,6]));

// right angle triangle revrse 

for (let i = 5; i>=1; i--){
    let row = ""
     
    for (let space = 1; space <= 5 - i; space++) {
     row = row + " ";
    }

    for(let j = 1; j<=i; j++){
        row = row + "*"
    }
    console.log(row)
}

// increasing right-aligned triangle with a decreasing right-aligned triangle.

for (let i = 1; i<=5; i++){
    let row = ""
   for (let space = 1; space <= 5 - i; space++) {
     row = row + " ";    }


    for(let j = 1; j<=i; j++){
        row = row + "*"
    }
    console.log(row)
}

for (let i = 4; i>=1; i--){
    let row = ""
    for (let space = 1; space <= 5 - i; space++) {
     row = row + " ";  
      }

    for(let j = 1; j<=i; j++){
        row = row + "*"
    }
    console.log(row)
}

// diamond 

for (let i = 1; i<=5; i++){
    let row = ""

    // for space 

    for (let space = 1; space<= 5 - i; space++){
        row =row + " "
    }

    // for triange
    for(let star = 1; star<= 2 * i -1; star++){
        row = row + "*"
    }
    console.log(row)
}

for (let i = 4; i>=1; i--){
    let row = ""

    // for space 

    for (let space = 1; space<= 5 - i; space++){
        row =row + " "
    }

    // for triange
    for(let star = 1; star<= 2 * i -1; star++){
        row = row + "*"
    }
    console.log(row)
}

// Write a function that returns only the users whose active value is true.

type User = {
  name: string;
  active: boolean;
};

const users: User[] = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true }
];

const checkUser = users.find((user) => {
    return user.active === true
})
console.log(checkUser)