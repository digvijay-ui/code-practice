// Remove spaces

const sentence = "I am learing Javascript";

let removeSpace = "";

for(let i =0; i<sentence.length; i++){
    if (sentence[i] !== " "){
        removeSpace = removeSpace + sentence[i];
    }
       
}
 console.log(removeSpace);

