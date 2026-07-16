// Count uppercase letters

const text = "HeLLo JavaScript";
let count = 0;

for(let i = 0; i<text.length; i++){
    if (
        text[i] !== " " &&
        text[i] === text[i].toUpperCase())
        {
        count++
    }
}
console.log(count);
