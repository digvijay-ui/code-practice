/* Find the first non-repeating character */

const word = "swiss"

let nonRepating = "";

for(let i =0; i<word.length; i++){
    (word.indexOf(word[i]) === word.lastIndexOf(word[i]))
    console.log(word[i]);
    break;
}