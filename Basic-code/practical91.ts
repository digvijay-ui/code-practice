// capitalized the first letter of the every word ;

const sentences  = "i am learing typescript";

const words = sentences.split(" ");

for(let i = 0; i<words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
const result = words.join(" ");

console.log(result);