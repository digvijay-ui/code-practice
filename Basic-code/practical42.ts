// find the second smallest number

const number = [12,23,14,45,24];

let smallestNumber = number[0];
let secondSmallest = Infinity;

for (let i = 0; i<number.length; i++){
    if (number[i] < smallestNumber){
        secondSmallest = smallestNumber;
        smallestNumber = number[i];
    }else if (number[i] < secondSmallest && number[i] > smallestNumber){
        secondSmallest = number[i];
    }
}

console.log(secondSmallest);