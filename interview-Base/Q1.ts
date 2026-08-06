/* Reverse a string */

const word = "interview";

let reverse = "";

for(let i = word.length -1; i>=0; i--){
    reverse = reverse + word[i]
}
console.log(reverse);