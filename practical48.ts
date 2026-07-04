// Two sum  ( in that we need to find target value)

const number = [6,2, 4];
const target = 8;

for(let i= 0; i<number.length; i++){
    for(let j = 1 + i; j<number.length; j++){
        if(number[i] + number[j] === target){
            console.log(number[i],number[j]);
        }
    }
}

