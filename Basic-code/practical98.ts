//  find the common character

const word1 = "hello";
const word2 = "world";

let common = "";

for (let i = 0; i<word1.length; i++){
    if(word2.includes(word1[i]) && !common.includes(word1[i]))  {
        common = common + word1[i]
    }
}

console.log(common);



