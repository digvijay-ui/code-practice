// Remove the duplicate number from array;

const number = [11,12,11,13,12,14];

const unique  : number[] = [];

for (let i = 0; i<number.length; i++){
    if(!unique.includes(number[i])){
        unique.push(number[i]);
    }
}
console.log(unique);
