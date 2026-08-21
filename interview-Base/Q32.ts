// second largest number 

export function secondLargest(numbers : number[]) :number{
    let largest = numbers[0];
    let secondLargestnNum = -Infinity;

    for (let i = 0; i<numbers.length; i++){
        if(numbers[i] > largest){
            secondLargestnNum = largest
            largest = numbers[i]
        } else if (numbers[i] > secondLargestnNum && numbers[i] < largest){
            secondLargestnNum = numbers[i]
        }
    }
    return secondLargestnNum;
}
console.log(secondLargest([10, 5, 8, 10, 3]))


// patern 

for (let i = 1; i<=5; i++){
    let row = ""

    for(let j = 1; j<=i; j++){
        row = row + "*"
    }
    console.log(row)
}

// reverse string 
 export function reverseString(str :string) : string{
    let result = "";

    for (let i = str.length - 1 ; i>=0; i--){
        result = result + str[i]
    }
    return result;
 }
 console.log(reverseString("hello"))


//  count vowel 

 export function countVowel(str : string) : number {
    let vowel = ("aeiou");
    let count = 0

    for (let i = 0; i<str.length; i++){
        if(vowel.includes(str[i])){
            count++
        }
    }
    return count;
 }
 console.log(countVowel("digvijay"));


//  find duplicate 


 export function findDuplicates(number : number[]) : number[] {
    let duplicate : number[] = [];

    for (let i = 0; i<number.length; i++){
        if(number.indexOf(number[i]) !== i && !duplicate.includes(number[i])){
            duplicate.push(number[i])
        }
    }
    return duplicate
 }

 console.log(findDuplicates([1, 2, 3, 2, 4, 1]))


//  missing number 
 export function missingNumber(number : number[]) : number {
    const n = number.length;
  
    let exepectedNumber = (n * (n +1))/2;
    let actualNUmber = 0;

    for (let i = 0; i<number.length; i++){
        actualNUmber = actualNUmber + number[i]
    }
 return exepectedNumber - actualNUmber

 }

 console.log(missingNumber([3,0,1]));

 // frequncy count 

 export function frequncyCount(numbers : number[]) : void {
    
    for(let i = 0; i<numbers.length; i++){
        if(numbers.indexOf(numbers[i]) === i){
            let count = 0;

            for(let j = 0; j<numbers.length; j++){
                if(numbers[j] === numbers[i]){
                    count++
                }
            }
             console.log(numbers[i] +  "appears" + count + "times")
        }
    }

    
 }

//  palindrome check

 export function isPlaindrome(str : string) : boolean{
    let reverse = ""

    for (let i = str.length - 1; i>=0; i--){
        reverse = reverse + str[i]
    }
    if(str === reverse){
        return true
    } else {
        return false
    }
 }
 console.log(isPlaindrome("madam"));

// sum of positive number 

export function sumOfPostivie(arr : number[]): number{
    let sum = 0;

    for (let i = 0; i<arr.length; i++){
        if(arr[i] > 0){
            sum = sum + arr[i]
        }
    }
    return sum
}
console.log(sumOfPostivie([1, -2, 3, 4, -5]));


// pattern reversed 
for(let i = 5; i>=1; i--){
    let row = ""

    //
    for(let j = 1; j<=i; j++){
        row = row + "*"
    }
    console.log(row)
}
