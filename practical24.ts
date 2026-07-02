// Find the smallest number in an array.

const number = [12,33,53,24,52];
let smallest = number[0];

for (let i = 0; i<number.length; i++){
    if (number[i] < smallest){
        smallest = number[i];
    }
}
console.log(smallest);