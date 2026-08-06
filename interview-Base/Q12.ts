/* Find two numbers whose sum equals a target */

const number = [8,2,3];

let target = 10;

for(let i = 0; i<number.length; i++){
    for(let j = i + 1; j<number.length; j++){
        if(number[i] + number[j] === target){
            console.log(number[i],number[j])
        }
    }
}