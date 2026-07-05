// Concept: Frequency of a Specific Number

const numbers = [5,3,5,6,7,5,9,5];

let count = 0;
let findFrequencyOf = 5;

for(let i = 0; i<numbers.length; i++){
    if(numbers[i] === 5){
        count++;
    }
}

console.log(count);