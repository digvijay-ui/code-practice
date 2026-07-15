// find the duplicate character

const word = "programming"

const duplicates : string[] = []


for(let i = 0; i<word.length; i++){
    if(word.indexOf(word[i])  !== i && !duplicates.includes(word[i]))
        duplicates.push(word[i]);
}
console.log(duplicates);


 


