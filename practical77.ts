// Find the first occurrence

const word = "Digvijay"

let index = -1;


for (let i = 0; i<word.length; i++){
    if (word[i] === "i"){
        index = i;
        break;
        
    }
}
console.log(index);
