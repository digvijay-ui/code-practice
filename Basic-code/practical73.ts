
// check how many space are the in sentecense

const senetences = "I am learing TypeScript";

let count = 0;

for (let i = 0; i<senetences.length; i++){
    if (senetences[i] === " "){
        count++;
    }
}
console.log(count);