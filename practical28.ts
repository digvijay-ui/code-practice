//Count numbers less than 30 in an array.

const number = [12,34,23,78,45];
let count = 0;

for (let i = 0; i<number.length; i++){
    if(number[i] < 30){
        count++;

    }
}
console.log(count);


