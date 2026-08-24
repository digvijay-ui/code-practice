// remove the duplicate number 
    export function removeDuplicates(arr : number[]) : number[] {
    
        let duplicate : number[] = [];

        for (let i = 0; i<arr.length; i++){
            if(!duplicate.includes(arr[i])){
                duplicate.push(arr[i])
            }
        }
        return duplicate
    }
    console.log(removeDuplicates([1, 2, 2, 1, 5, 3, 5]));

    // Find the maixmum occuring number 

    export function maximum (arr : number[]) : number {
       let maixmum = 0;
       let mostFrequentNumber = arr[0];

       for(let i = 0; i<arr.length; i++){
        let count = 0;

        for (let j = 0; j<arr.length; j++){
            if(arr[i] === arr[j]){
                count++
            }
        }
        if (count > maixmum){
            maixmum = count;
            mostFrequentNumber = arr[i]
        }
       }
       return mostFrequentNumber
    
    }
    console.log(maximum([1,2,2,4,2,5,1]))


    //  Count Positive and Negative Numbers

    export function countPostNeg(arr : number[]) : string {
        let postiveCount = 0;
        let negativeCount = 0;

        for (let i = 0; i<arr.length; i++){
            if(arr[i] > 0){
                postiveCount++
            } else if (arr[i] < 0 ){
                 negativeCount++
            }
        }
      return "Postive: " +  postiveCount +  ", Negative: " +  negativeCount;
    }
    console.log(countPostNeg([1, -2, 3, -4, 0]))
   
    // Find the Second Smallest Unique Numbe

     const number = [1,2,4,5,3,4,4,1]

     let unique : number[] = [];
     
     for (let i = 0; i<number.length; i++){
        if(!unique.includes(number[i])){
            unique.push(number[i]);
        }
          
    }
       let smallest = unique[0];
       let secondSmallest = Infinity;

        for (let i = 0; i<unique.length; i++){
            if(unique[i] < smallest){
                secondSmallest = smallest;
                smallest = unique[i]
            } else if (unique[i] > smallest && unique[i] < secondSmallest ){
                secondSmallest = unique[i]
            }
        }
    
     console.log(secondSmallest)

    // hollow pattern 

    for (let i = 1; i<=5; i++){
        let row = ""
    
    for (let j = 1;  j<=5; j++){
        if(i === 1 || i === 5 || j === 1 || j === 5){
            row = row + "*"
        } else {
            row = row + " "
        }
    }
      console.log(row)
    }

    // sum of digit  
export function sumDigits(num: number): number {
  
    let sum = 0;

    while (num > 0){
        let digit = num % 10;
        sum = sum + digit;
        num = Math.floor(num/10);
    }
  return sum
}
console.log(sumDigits(1234))