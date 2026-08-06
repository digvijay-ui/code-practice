/* find the largest and second largest numbers */

// const numbers = [12,34,56,23,74];

// let largestNum = numbers[0];

// for(let i = 0; i<numbers.length; i++){
//     if(numbers[i] > largestNum){
//         largestNum = numbers[i];
//     }
// }
// console.log(largestNum)

/* find second largest number */

const numbers = [12,34,56,23,74];

let largestNum = numbers[0];

let secondLargest = -Infinity;

for(let i = 0; i<numbers.length; i++){
    if(numbers[i] > largestNum){
        secondLargest = largestNum
        largestNum = numbers[i]
    }else if(numbers[i] > secondLargest && numbers[i] <largestNum)
        secondLargest = numbers[i]
}
console.log(secondLargest)
