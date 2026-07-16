//Find the count of numbers greater than 20 in an array.

const num = [12,33,44,2,43,24];
let count = 0;

for (let i = 0; i<num.length; i++){
    if (num[i] > 20){
        count++
    }
}
console.log(count);

