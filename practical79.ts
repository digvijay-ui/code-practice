// check pallindrome  

const word = "digvijay";

let reversed = "";

for (let i = word.length -1; i>=0; i--){
    reversed = reversed +  word[i]
}
 if (word === reversed)
    console.log("Palindrome");
else {
    console.log("Not Palindrome");
}



