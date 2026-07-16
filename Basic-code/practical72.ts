// Count a specific character
const word = "javascript";

let count = 0;


for (let i = 0; i<word.length; i++){
    if(word[i] === "a"){
        count++
        
    }
}
console.log(count);