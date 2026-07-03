// find the second largest number 

const number = [12,34,43,55,23,54];

let largestNumber = number[0];
let secondLargestNumber = - Infinity;

for (let i = 1; i<number.length; i++){
    if (number[i] > largestNumber){
        secondLargestNumber = largestNumber;
        largestNumber = number[i];
    } else if ( number[i] > secondLargestNumber  && number[i] < largestNumber){
        secondLargestNumber = number[i];
    }
}
console.log(secondLargestNumber);