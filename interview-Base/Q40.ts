// count negative number


export function countNegative(arr: number[]) : number{
    let count = 0;

    for (let i = 0; i<arr.length; i++){
        if(arr[i] < 0){
            count++
        }
    }
   return count

}
console.log(countNegative([1, -2, 3, -4, -5]))

// count postive number 

export function countPostive(arr: number[]) : number{
    let count = 0;

    for (let i = 0; i<arr.length; i++){
        if(arr[i] === 0){
            count++
        }
    }
   return count

}
console.log(countPostive([0,1, 2, 3, 4, 0]))


// sum of evenNUmber

export function sumOfEven(arr: number[]) : number {
    let sum = 0;

    for(let i = 0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            sum = sum + arr[i]
        }
    }
    return sum
}
console.log(sumOfEven([1,2,3,4,5,6]));


// sum of oddNumber

export function sumOfOdd(arr: number[]) : number {
    let sum = 0;

    for(let i = 0; i<arr.length; i++){
        if(arr[i] % 2 !== 0){
            sum = sum + arr[i]
        }
    }
    return sum
}
console.log(sumOfOdd([1,2,3,4,5,6]));

// first not repating number

export function firstNonRepating(arr : number[]) : number {

    for (let i = 0; i<arr.length; i++){
        if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
            return arr[i];
        }
    }
    return -1
}
console.log(firstNonRepating([4, 5, 1, 2, 1, 4, 5]))


// Count Occurrences of a Number


export function countNumber (arr : number[], target : number) : number {
    let count = 0;

    for (let i = 0; i<arr.length; i++){
        if(arr[i] === target){
            count++
        }
    }
    return count
}
console.log(countNumber([1, 2, 2, 3, 2, 4], 2));

