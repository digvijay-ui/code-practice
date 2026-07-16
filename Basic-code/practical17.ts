// Print numbers from 1 to 30.

// If divisible by 3, print "Fizz"
// If divisible by 5, print "Buzz"
// Otherwise print the number itself.

// Hint: use if, else if, else.

for (let i = 1; i<=30; i++){
    
    if ( i % 3 === 0){
        console.log("Fizz");
    } else if ( i % 5 === 0){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}