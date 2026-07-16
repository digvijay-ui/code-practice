// find the most frequncy char

const word = "banana";

const freqecuncy : Record<string , number > = {};

let mostFrequent = ""
let highestCount = 0;

for(let i = 0; i<word.length; i++){
    const character = word[i]


if (freqecuncy[character]){
    freqecuncy[character]++
} else {
    freqecuncy[character] = 1
}


if(freqecuncy[character] > highestCount){
    highestCount = freqecuncy[character]
    mostFrequent = character
}
      
}
console.log(mostFrequent ,"=", highestCount);


