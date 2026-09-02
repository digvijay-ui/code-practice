//  find the first duplicate number 

    export function  firstDuplicate(arr : number[]) : number {

        const duplicate : number[] = [];

        for (let i = 0; i<arr.length; i++){
            if(duplicate.includes(arr[i])){
                return(arr[i])
            }
            duplicate.push(arr[i])
        }
        return -1
    }
    console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));

    // sum of unique number


    export function sumOfUnique(arr : number[]) : number {
        let sum = 0;

        for (let i = 0; i<arr.length; i++){
            if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
                sum = sum + arr[i]
            }
        }
        return sum
    }
    console.log(sumOfUnique([1, 2, 2, 3, 4, 4]))

    // pallindrome triangle pattern

    for (let i = 1; i<=5; i++){
        let row = "";

        for (let space = 1; space<= 5 - i; space++){
            row = row + " "
        }
        /* increasing */

        for(let j = 1; j<=i; j++){
            row = row + j
        }
        /* decreasing */

        for (let j = i - 1; j>=1; j--){
            row = row + j
        }
        console.log(row)
    }