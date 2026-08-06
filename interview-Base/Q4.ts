/* Find duplicate characters */

const word = "typescript";

let duplicate : string[] = [];

for(let i = 0; i<word.length; i++){
    if(word.indexOf(word[i]) !== i && !duplicate.includes(word[i])){
        duplicate.push(word[i]);
    }
   
}
 console.log(duplicate);