const numbers = [1,2,3,4,5,6,7,8,9]
const target = 10;

for (let i = 0; i<numbers.length; i++){
    for(let j = i + 1 ; j<numbers.length; j++){
        if(numbers[i] + numbers[j] === target){
            console.log(numbers[i] , numbers[j]);
        }
    }
}