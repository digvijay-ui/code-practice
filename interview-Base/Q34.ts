// first uniqueue character 

export function uniqueChar(str : string) : string {
    for (let i = 0; i<str.length; i++){
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
            return str[i]
        }
    }
    return ""
}
console.log(uniqueChar("digvijay"))

// Count even number 

export function countEven(arr : number[]) : number {
    let count = 0;

    for (let i = 0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            count++
        }
    }
    return count
}
console.log(countEven([1,2,3,4,6,8]));

// find the smallest

export function findSmallest(arr : number[]) : number{
 let largest = 0;
 let smallest = Infinity;

 for(let i = 0; i<arr.length; i++){
    if(arr[i] < smallest){
        smallest = arr[i]
    }
 }
 return smallest
}
console.log(findSmallest([1,2,3,4]))

// sum of odd number 

export function countEven(arr : number[]) : number {
    let sum = 0;

    for (let i = 0; i<arr.length; i++){
        if(arr[i] % 2 !== 0){
            sum = sum + arr[i]
        }
    }
    return sum
}
console.log(countEven([1,2,3,4,6,8]));


// pattern 

for (let i = 1; i<=5; i++){
    let row = ""

    for(let j = 1; j<=i; j++){
        row = row + i + " "
    }
    console.log(row)
}

// find the largest nad smallest diffrence 

export function largestDiffrence(data : number[]) : number {
   let largest = data[0];
   let smallest = data[0];

   for(let i = 0; i<data.length; i++){
    if(data[i] > largest){
        largest = data[i]
    }
    if(data[i] < smallest){
        smallest = data[i]
    }
   }
   
   return largest - smallest
}
console.log(largestDiffrence([8, 3, 10, 2, 6]))

// count the Occurence of a character 
export function countChar(str: string, char: string): number {
  let count = 0;

  for (let i = 0; i<str.length; i++){
    if(str[i] === char){
        count++
    }
  }
  return count;

}
console.log(countChar("digvijay","i",));

// revrse an array 

    export function reverseArray(arr : number[]) : number[] {
        let reversed : number[] = []

        for (let i = arr.length - 1; i>=0; i--){
            reversed.push(arr[i])
        }
        return reversed
    }
    console.log(reverseArray([5,4,3,2,1]));


    // find the common element 

    const number1 = [1,2,3,4,5];
    const number2 = [4,5,6,7,8];

    let common : number[] = []

    for (let i = 0; i<number1.length; i++){
        if(number2.includes(number1[i]) && !common.includes(number1[i])){
            common.push(number1[i])
        }
    }
    console.log(common)


    // palindrom trinagle 

    for (let i = 1; i<=5; i++){
        let row = "";
        
        // for space 
        for(let space = 1; space<= 5 - i; space++){
            row = row + " "
        }
        // for increase
        for(let j = 1; j<=i; j++){
            row = row + j
        }
        for (let j = i - 1; j>=1; j--){
            row = row + j
        }
        console.log(row)
    }