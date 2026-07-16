// Find largest word 

const sentences = "I am learing Javascript"

const words = sentences.split(" ");

let longestWord = words[0];

for(let i = 1; i<words.length; i++){
    if(words[i].length > longestWord.length){
        longestWord = words[i];
    }
}

console.log(longestWord);

