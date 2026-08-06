/*Check whether a string is a palindrome */

const word = "dad";

let reverse = "";

for(let i = word.length -1; i>=0; i--){
    reverse = reverse + word[i]
    }
      if (word === reverse){
            console.log("Number is Palindrome");
        } else {
            console.log("Number is not Palindrome");
        }


