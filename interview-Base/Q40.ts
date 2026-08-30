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

