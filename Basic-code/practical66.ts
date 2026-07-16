//Find the smallest even number.

const numbers = [15, 22, 9, 4, 18, 7];
let smallestNumber = Infinity;

for(let i = 0; i<numbers.length; i++){
    if ( numbers[i] % 2 === 0){
        if (numbers[i] < smallestNumber)
        smallestNumber = numbers[i];
    }
}
console.log(smallestNumber);