// Print numbers from 1 to 50.

// If divisible by both 3 and 5, print "FizzBuzz"
// Else if divisible by 3, print "Fizz"
// Else if divisible by 5, print "Buzz"
// Otherwise print the number.


for ( let i = 1; i<=50; i++){
    if (i % 3 ===0 && i % 5 ===0){
        console.log("FizzBuzz");
    } else if ( i % 3 ===0){
        console.log("Fizz");
    }else if (i % 5 ===0){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}