// find the uncommon sentences 


const word1 = "digvijay";
const word2 = "rajput";

let uncommon = "";

for(let i = 0; i<word1.length; i++){
    if(!word2.includes(word1[i]) && !uncommon.includes(word1[i])){
        uncommon = uncommon + word1[i]
    }

}


for (let i = 0; i<word2.length; i++){
    if(!word1.includes(word2[i]) && !uncommon.includes(word2[i])){
        uncommon = uncommon + word2[i]
    }
}

console.log(uncommon);