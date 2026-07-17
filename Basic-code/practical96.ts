// Find the second most frequent character
 
const word  = "banana";

const frequency : Record<string , number> = {};

for(let i = 0; i<word.length; i++){
    const character = word[i]

    if (frequency[character]){
        frequency[character]++
    } else {
        frequency[character] = 1
    }
}

let highestCount = 0;
let secoundHighestCount = 0;

let mostFrequent = "";
let secondMostFrequent = "";

for (const character in frequency){
    const count = frequency[character];

    if(count > highestCount){
        secoundHighestCount = highestCount;
        secondMostFrequent = mostFrequent;

        highestCount = count;
        mostFrequent  = character;
    } else if (
        count > secoundHighestCount  && count < highestCount
    ){
        secoundHighestCount = count;
        secondMostFrequent = character;
    }
}
console.log(secondMostFrequent , "=" , secoundHighestCount);


