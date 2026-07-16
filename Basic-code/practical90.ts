// Check anagram

const word1 = "listen";
const word2 = "silent";

const sortedWord1 = word1.split("").sort().join("");
const sortedWord2 = word2.split("").sort().join("");

if(sortedWord1 === sortedWord2){
    console.log("Anagram")
} else {
    console.log("Not Anagram")
}



