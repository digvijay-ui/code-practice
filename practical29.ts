// Find the sum of numbers less than 30.

const number = [12,34,23,78,45];
let sum = 0;

for (let i = 0; i<number.length; i++){
    if(number[i] < 30){
        sum = sum + number[i];

    }
}
console.log(sum);
