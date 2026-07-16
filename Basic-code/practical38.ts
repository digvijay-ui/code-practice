// find the largest number

const number = [12,44,23,56,23,75,56];

let largest = number[0];

for (let i = 0; i<number.length; i++){
    if(number[i] > largest){
        largest = number[i]

    }
}
console.log(largest);