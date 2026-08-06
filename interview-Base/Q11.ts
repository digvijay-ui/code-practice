/* Find the missing number in an array */

function missingNumber (numbers: number[]): number {
    const n = numbers.length;

  const expectedSum = (n  * (n + 1))/2;

  let actualNumber = 0;

  for(let i = 0; i<numbers.length; i++){
    actualNumber += numbers[i]
  }

  return expectedSum - actualNumber
}

console.log(missingNumber([3,2,0]));