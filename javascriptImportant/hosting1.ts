// practice 

function missingNumber(nums){
    let n = nums.length;


    let exepectedOutput = 0;
    for(let i = 0; i<n; i++){
        exepectedOutput += i;
    }

    let actualSum = 0;
    for(let i = 0; i<nums; i++){
        actualSum += n[i];
    }

    missingNumber = exepectedOutput - actualSum 
}
console.log(missingNumber([3,0,1]));