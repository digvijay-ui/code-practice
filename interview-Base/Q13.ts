/* write code for odd and even */

const numbers : number[]= [34];

let checkResult : string[] =[]
for(let i = 0; i<numbers.length; i++)
    if(numbers[i] % 2 === 0){
        checkResult.push("even")
    } else {
        checkResult.push("odd");
    }


console.log(checkResult);