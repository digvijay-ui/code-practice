// Move all zeros to the end of this array.

const number = [0,1,0,2,0,3,4];

const result : number[] = [];

// first for loop for all no-zero
for (let i = 0; i<number.length; i++){
    if(number[i] !== 0){
        result.push(number[i]);
    }
}


// second for loop for all zero
for(let i=0; i<number.length; i++){
    if(number[i] === 0){
        result.push(number[i]);
    }
}

console.log(result);