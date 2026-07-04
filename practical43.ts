// Check if this array is sorted in ascending order:

const number = [12,13,14,15];

let isSorted = true;

for (let i = 0; i<number.length -1 ; i++){
    if (number[i] > number[i + 1]){
        isSorted = false;
        break;
    
    }
}
console.log(isSorted);


