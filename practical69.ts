//Find the pair whose sum is 100.
 const numbers = [20, 40, 60, 80, 50];
const target = 100;

for ( let i = 0; i<numbers.length; i++){
    for ( let j = i +1; j< numbers.length; j++){
        if (numbers[i] + numbers[j] === target){
            console.log(numbers[i], numbers[j]);
        }
    }
}