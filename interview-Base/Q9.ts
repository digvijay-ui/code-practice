/*Remove duplicates from an array */

const numbers = [1,2,4,2,5,1];

let duplicates : number[] = []

for(let i = 0; i<numbers.length; i++){
    if(numbers.indexOf(numbers[i]) !== i && !duplicates.includes(numbers[i])){
        duplicates.push(numbers[i])
    }
}
console.log(duplicates);