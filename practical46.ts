// find duplicates number from array

const number = [11,12,11,13,12,14];

const duplicates : number[] = [];

for(let i = 0; i<number.length; i++){
    if(number.indexOf(number[i]) !== i && !duplicates.includes(number[i])){
        duplicates.push(number[i]);
    }
}
console.log(duplicates);