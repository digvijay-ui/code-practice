//   Remove duplicate characters

const word = "banana"

let result = " ";

for(let i = 0; i<word.length; i++){
  if(!result.includes(word[i])){
    result = result + word[i]
  }
}

console.log(result);