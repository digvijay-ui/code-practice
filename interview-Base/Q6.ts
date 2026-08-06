/* Check whether two strings are anagrams */

const word1 = "silent"
const word2 = "listen"

const sortWord1 = word1.split("").sort().join("");
const sortWord2 = word2.split("").sort().join("");

if(sortWord1 === sortWord2){
    console.log("anagram number");
} else {
    console.log("not anagram");
}