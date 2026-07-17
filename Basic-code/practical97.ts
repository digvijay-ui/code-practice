// Check string rotation

const word1 = "abcd";
const word2 = "cdab";

const combined =  word1 + word1

if ( word1.length === word2.length && combined.includes(word2)
){
    console.log("Rotation");
} else {
    console.log("Not Rotation");
}