// Find the second occurrence of 12. 

const numbers = [12, 45, 12, 67, 12, 90];

let index = -1;
let count = 0;

for(let i = 0; i<numbers.length; i++){
    if(numbers[i] === 12){
        count++;

        if (count === 2){
            index = i;
            break;
        }
    }
}

console.log(index);