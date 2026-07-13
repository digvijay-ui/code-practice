// Find the second largest number.

// const numbers = [12, 45, 78, 23, 65];

// let largestNumber = numbers[1];
// let secondLargest = -Infinity;

// for(let i = 0; i<=numbers.length; i++){
//     if(numbers[i]  > largestNumber){
//         secondLargest = largestNumber
//         largestNumber = numbers[i]
//     } else if (numbers[i] > secondLargest && numbers[i] < largestNumber){
//         secondLargest = numbers[i];
//     }
  
    
// }
// console.log(secondLargest);

// Find the index of the first occurrence of 23.

// const numbers = [10, 23, 45, 23, 67];

// let index = -1;
// for (let i = 0; i< numbers.length; i++){
//     if(numbers[i] === 23 ){
//         index = i;
//         break;
//     }

    
// }
// console.log(index);

// check two sum 
// const numbers = [3, 5, 7, 8, 10, 12];
// const target  = 15;

// for(let i =0; i<numbers.length; i++){
//     for(let j = i+1; j<numbers.length; j++){
//         if (numbers[i] + numbers[j] === target){
//             console.log(numbers[i], numbers[j]);
            
//         }
        
//     }
// }


// pattern 


for(let i = 1; i<=5; i++){
    let row = "";


    // for space 
  for (let space = 1; space <= 5-i; space++){
    row =  row + " ";
  }
  // for star
  
  for (let star = 1; star<= (2 * i -1); star++){
    row = row + "*";
  }
  console.log(row);

}