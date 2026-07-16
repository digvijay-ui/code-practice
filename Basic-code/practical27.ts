// Find the sum of numbers greater than 20 in this array:
const number = [12,33,55,24,63];
let sum = 0;
for(let i = 0; i<number.length; i++){
    if(number[i] > 20){
        sum = sum + number[i]
    }
}
console.log(sum);