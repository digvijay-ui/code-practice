// reverse word 

// const word = "hello digvijay";

// let result = "";

// for (let i = word.length -1 ; i>=0; i--){
//     result = result + word[i]
// }
// console.log(result);


// count character frequency 
// const word = "digvijay";

// const frequency : Record<string , number> ={}

// for (let i = 0; i<word.length; i++){
//     const character = word[i]

//     if(frequency[character]){
//         frequency[character]++
//     } else {
//         frequency[character] = 1
//     }
// }
// console.log(frequency);

// count the word 

// const word = "digvijay"
// let count = 0;

// for (let i = 0; i<word.length; i++){
//     count++
// }
// console.log(count)

// find te dupicate character 

// const word = "banana";

// const duplicate : string[] = [];

// for (let i = 0; i<word.length; i++){
//     if(word.indexOf(word[i]) !== i && word.includes(word[i])){
//         duplicate.push(word[i])
//     }
// }
// console.log(duplicate);


// remove the duplicate character from the string 
// const word = "banana";
// let result = " ";

// for (let i = 0; i<word.length; i++){
//     if(!result.includes(word[i])){
//         result = result + word[i]
//     }
// }

// console.log(result);


// check weather two string are anagrams 

// const word1 = "listen";
// const word2 = "silent";

// const sortWord1 = word1.split("").sort().join("");
// const sortWord2 = word2.split("").sort().join("");

// if (sortWord1 === sortWord2){
//     console.log("Anagram")
// } else {
//     console.log("Not Anagram");
// }

// find the frist no-repating charcter 

// const word = "digvijay"

// for(let i = 0; i<word.length; i++){
//     if(word.indexOf(word[i]) !== word.lastIndexOf(word[i])){
//         console.log(word[i]);
//         break;
//     }
// }

// find the largest number 

// const number = [12,45,56,63,24];

// let largestNumber = 0;

// for (let i = 0; i<number.length; i++){
//     if(number[i] > largestNumber){
//         largestNumber = number[i]
//     }
// }
// console.log(largestNumber);


// find the second largest number 

// const number = [12,45,56,63,24];

// let largestNumber = number[0];
// let secondLargest = -Infinity;

// for (let i = 0; i<number.length; i++){
//     if (number[i] > largestNumber){
//         secondLargest = largestNumber;
//         largestNumber = number[i]
//     } else if (number[i] > secondLargest && number[i] < largestNumber){
//         secondLargest = number[i];
//     }
// }

// console.log(secondLargest);

// find the smallest element in the element 

// const number = [12,45,56,63,24];

// let smallestNumber = number[0]

// for (let i = 0; i<number.length; i++){
//     if(number[i] < smallestNumber){
//         smallestNumber = number[i]
//     }
// }
// console.log(smallestNumber)

// find the second smallest smallest number 
// const number = [12,45,56,63,24];

// let smallesr = number[0];
// let secondSmallest = Infinity;

// for (let i = 0; i<number.length; i++){
//     if (number[i] < smallesr){
//         secondSmallest= smallesr;
//         secondSmallest = number[i]
//     } else if (number[i] < secondSmallest && number[i] > smallesr){
//         secondSmallest = number[i];
//     }
// }

// console.log(secondSmallest);

//  find the sum of the array element 

// const number = [12, 45, 56, 63, 24];

// let sum = 0;

// for (let i = 0; i<number.length; i++){
//     sum = sum + number[i];
// }
// console.log(sum)

// Reverse the array 

// const number = [12, 45, 56, 63, 24];

// const reverse : number[] = [];

// for (let i = number.length -1; i>=0; i--){
//     reverse.push(number[i])
// }
// console.log(reverse);


// remove the duplicate number

// const number = [1,2,3,1,2,1,8];

// let result : number[] = []

// for (let i = 0; i<number.length; i++){
//     if(!result.includes(number[i])){
//         result.push(number[i])
//     }
// }
// console.log(result);


//  find the duplicate element in the array 

const number = [1,2,3,1,2,1,8];

const duplicate : number[] = []

for (let i = 0; i<number.length; i++){
    if(number.indexOf(number[i]) !== i && number.includes(number[i])){
        duplicate.push(number[i])
    }
}
console.log(duplicate)


