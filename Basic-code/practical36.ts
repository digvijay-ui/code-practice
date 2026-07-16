//Find how many times 12 appears in this array:

const number = [12,33,44,22,22,56,12,12,12];
let count = 0;

for (let i = 0; i<number.length; i++){
    if(number[i] === 33){
        count++;
    }

}
console.log(count);