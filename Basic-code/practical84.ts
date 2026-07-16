// // shortest word 

const sentences = "I am learing Javascript"

const words = sentences.split(" ");

let shortestWord = words[0];

for(let i = 0; i<words.length; i++){
    if(words[i].length < shortestWord.length ){
        shortestWord= words[i]
    }
}

console.log(shortestWord);


