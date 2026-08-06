/* Move all zeros to the end */

const number = [1,2,0,3,0,5,0,3,0];

const result : number[] = []

// first loop 

for(let i = 0; i<number.length; i++){
    if(number[i] !== 0){
        result.push(number[i]);
    }
}

// second loop

for(let i = 0; i<number.length; i++){
    if(number[i] === 0){
        result.push(number[i]);
    }
}

console.log(result)