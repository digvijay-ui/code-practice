// Find the index of a given number in an array.

const number = [12,33,56,21,66];
let index = -1;

for(let i = 0; i<number.length; i++){
    if(number[i] ===  33){
        index = i
        break;
    }
}
console.log(index);

