// find the first duplicate number 

export function findDuplicate(arr : number[] ): number{
    let seen : number[] = [];

   for (let i = 0; i<arr.length; i++){
    if(seen.includes(arr[i])){
        return arr[i]
    }
    seen.push(arr[i])
   }
   return -1
   }   

console.log(findDuplicate([1,2,3,2,4,1]))

// check anagram 

const word1 = "listen";
const word2 =  "silent";

const sortWord1 = word1.split("").sort().join("");
const sortWord2 = word2.split("").sort().join("");

if(sortWord1 === sortWord2){
    console.log("true")
} else {
    console.log("false");
}

// check Prime number 

export function checkPrime(num : number) : boolean {
    if(num < 2){
        return false
    }

    for (let divisior = 2; divisior < num; divisior++){
        if(num % divisior === 0){
            return false
        }
    }
    return true
}

const num : number = 7;
if(checkPrime(num)){
    console.log(`${num} is a Prime number`)
} else {
    console.log(`${num} is a Not prime number`)
}

// 

for (let i = 1; i<=5; i++){
    let row  = "";

    for(let j = 1; j<=i; j++){
        if(i === 5 || j === i || j === 1){
            row = row + "*"
        } else {
            row = row + " "
        }
    } 
    console.log(row)
}

