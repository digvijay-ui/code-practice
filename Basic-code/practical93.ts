// Reverse every word in a sentence

const sentences = "I am learing typescript";

const words = sentences.split(" ");
let result = ""

for(let i = 0; i<words.length; i++){
    let reversedWord = ""


    for(let j = words[i].length - 1; j>=0; j--){
        reversedWord = reversedWord + words[i][j]
    }

    result = result + reversedWord

    if( i < words.length -1){
        result = result + " "
    }
}

console.log(result);



