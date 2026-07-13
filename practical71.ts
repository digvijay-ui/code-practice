// Count how many vowels are present in this string:

const word = "javascript";

let count = 0;
let vowels = "a,e,i,o,u";
for(let i = 0; i<word.length; i++){
    if (vowels.includes(word[i])){
        count++
    }
        
    
}

console.log(count);
