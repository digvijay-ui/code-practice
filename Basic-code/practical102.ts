// Find every index where "a" appears:

const word = "javascript";

const index : number[] = [];

for (let i = 0; i<word.length; i++){
    if(word[i] === "a"){
        index.push(i);
    }
}
console.log(index);