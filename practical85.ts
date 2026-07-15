// count char freqecuncy;

const word = "banana";

const freqecuncy : Record<string , number> ={};

for(let i = 0; i<word.length; i++){
    const character = word[i];

    if (freqecuncy[character]){
        freqecuncy[character]++
    }   else {
        freqecuncy[character] = 1 
    }
    
}

console.log(freqecuncy);
