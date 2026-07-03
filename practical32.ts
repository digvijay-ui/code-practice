// Find the first odd number in this array.

const number = [12,35,56,21,57];

for (let i = 0; i<number.length; i++){
    if(number[i] % 2 !== 0){
        console.log(number[i]);
        break;
    }
}


// Find the first number greater than 50 in this array:
const number = [23,57,56,99,12];

for (let i = 0; i<number.length; i++){
    if(number[i] > 50){
        console.log(number[i]);
        break;
    }
}