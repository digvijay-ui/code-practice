// find the missing number 

function missingNumber (numbers: number[]) : number {
    const  n = numbers.length;

    let exepectedSum = (n * (n + 1)) /2

    let actualNumber = 0;

    for (let i = 0; i<numbers.length; i++){
        actualNumber = actualNumber + numbers[i]
    }
    return exepectedSum - actualNumber
}

console.log(missingNumber([3,0,1]))

// find the frequnecy of each element

const number = [2, 3, 2, 5, 3];

for(let i =0; i<number.length; i++){
    let count = 0;

    for(let j = 0; j<number.length; j++){
        if(number[j] === number[i]){
            count++
        }
        
    }
    console.log(number[i] + "appears" + count + "times")
}

// find common character 

const word1 = "hello";
const word2 = "world";

let common = ""

for(let i = 0; i<word1.length; i++){
    if(word2.includes(word1[i]) && !common.includes(word1[i])){
        common = common + word1[i]
    }
}
console.log(common)

// find common element in the array

const number1 = [1,2,4,5];
const number2 = [1,2,5,6];

let common : number[] = [];

for(let i = 0; i<number1.length; i++){
    if(number2.includes(number2[i]) && !common.includes(number1[i])){
        common.push(number1[i]);
    }
}
console.log(common)


// find the uncommon character 

const word1 = "hello";
const word2 = "world";

let uncommon = ""

for(let i = 0; i<word1.length; i++){
    if(!word2.includes(word1[i]) && !uncommon.includes(word1[i])){
        uncommon = uncommon + word1[i]
    }
}
for(let i = 0; i<word2.length; i++){
    if(!word1.includes(word2[i]) && !uncommon.includes(word2[i])){
        uncommon = uncommon + word2[i]
    }
}

console.log(uncommon)