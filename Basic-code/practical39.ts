// Find the count of numbers greater than 50 in this array:

const number = [12,34,86,83,54,63];
let count = 0;
for (let i = 0; i<number.length; i++){
    if(number[i] > 50){
        count++
    }
}
console.log(count);


