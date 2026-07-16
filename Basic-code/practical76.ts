// count digit

const textDigit = "Hello@2026!";

let count = 0;

for (let i = 0; i<textDigit.length; i++){
   if (
         textDigit[i] !== "" &&
         textDigit[i] >= "0" && textDigit[i] <= "9"
   ){
     count++;
   }
}

console.log(count);

// Find the first occurrence
const word = "javascript";
let index = -1;

for (let i = 0; i<word.length; i++){
    if (word[i] === "a"){
     index = i;
     break;
    }
}
console.log(index); 
