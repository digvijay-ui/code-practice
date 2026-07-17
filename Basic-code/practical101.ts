//  remove the specific character 
const word = "digvijay";

let result = ""

for (let i = 0; i<word.length; i++){
    if (word[i] !== "a"){
        result = result + word[i]
    }
}

console.log(result);
  

