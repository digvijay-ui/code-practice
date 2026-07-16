// Count words

const word = "I am learning Javascript"

let count = 1;

for(let i = 0; i<word.length; i++){
    if(word[i] === " "){
        count++

    }
       
}
console.log(count);


