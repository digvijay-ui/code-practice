/* Reverse an array without using reverse() */

const numbers = [1,2,3,4,5];

let reverse : number[] = [];

for(let i = numbers.length -1; i>=0; i--){
    reverse.push(numbers[i])
}

console.log(reverse);