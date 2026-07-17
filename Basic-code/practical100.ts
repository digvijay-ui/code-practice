// compress a string 

const word = "aaabbc";

let compress = "";

let count = 1;

for (let i = 0; i<word.length; i++){
    if(word[i] === word[i + 1]){
        count ++
    } else { 
    compress = compress + word[i] + count;
    count = 1;
    }
}


console.log(compress);



