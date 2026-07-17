//Find the first repeating character

const word = "programming";

for(let i = 0; i<word.length; i++){
    if(word.indexOf(word[i]) !== word.lastIndexOf(word[i])){
        console.log(word[i]);
        break;
    }
}




