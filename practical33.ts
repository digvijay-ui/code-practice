// Find the index of first number greater than 50.

const number = [23,57,56,99,12];

for (let i = 0; i<number.length; i++){
    if(number[i] > 50){
        console.log(i);
        break;
    }
}