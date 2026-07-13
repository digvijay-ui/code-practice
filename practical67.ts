// Count how many numbers are divisible by both 2 and 3.
const numbers = [6, 12, 18, 20, 24, 25];

let count = 0;

for (let i =0; i<numbers.length; i++){
    if (numbers[i] % 2 === 0 && numbers[i] % 3 === 0 ){
        count++
    }
  
}
console.log(count);