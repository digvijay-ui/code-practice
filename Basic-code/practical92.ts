// Count vowels and consonants separately


const word =  "Digvijay";

const vowel = "a,e,i,o,u"
let vowelCount = 0;
let consonantCount = 0;

for(let i = 0; i<word.length; i++){
    if(vowel.includes(word[i])){
         vowelCount++
    } else {
        consonantCount++
    }
}

console.log("vowel:",vowelCount);
console.log("consonantCount:",consonantCount);

