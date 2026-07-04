// Copy this array into a new array using a for loop.

const number = [1,2,3,4];

const copy : number[] = [];

for (let i = 0; i<number.length; i++){
    copy.push(number[i])
}
console.log(copy);