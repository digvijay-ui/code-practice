// count lower case Letter


const text = "HeLLo JavaScript";

let count = 0;
for(let i =0; i<text.length; i++){
    if(
          text[i] !== " " &&
          text[i]  === text[i].toLowerCase()){
        count++
    }
    
}
console.log(count);