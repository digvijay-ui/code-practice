//  longest substring without repeating character

const word = "abcabcbb"

let current = "";
let longest = "";


for (let i = 0; i<word.length; i++){
   const character = word[i];

   if(current.includes(character)){
    const repeatedIndex = current.indexOf(character);

    current = current.slice(repeatedIndex + 1);
   }

     current = current + character; 
      if( current.length > longest.length){
      longest = current;
 }
}

console.log(longest);
console.log(longest.length);