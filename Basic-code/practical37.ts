// Find the last occurrence of 12 in the array.

const number = [22,445,11,45,12];

let index = -1;

for (let i = 0; i<number.length; i++){
    if(number[i] === 12){
        index = i
    }

}
console.log(index);