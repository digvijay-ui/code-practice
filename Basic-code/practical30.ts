// Find the count of even numbers in this array:

const number = [12,23,44,14,56,21];
let count = 0;

for (let i = 0; i<number.length; i++){
    if (number[i] % 2 === 0){
        count++;
    }
}
console.log(count);

// Find the sum of even numbers in an array.
const number = [12,23,44,14,56,21];
let sum = 0;

for (let i = 0; i<number.length; i++){
    if (number[i] % 2 === 0){
        sum = sum + number[i];
    }
}
console.log(sum);

//Find the count of odd numbers in this array:
const number = [12,23,44,14,56,21];
let count = 0;

for (let i = 0; i<number.length; i++){
    if (number[i] % 2 !== 0){
        count++;
    }
}
console.log(count);