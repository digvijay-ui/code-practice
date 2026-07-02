//Print numbers from 1 to 30.

// If number is divisible by 3, print "Fizz"
// Otherwise print the number itself.

for (let i = 1; i<=30; i++){
    if (i % 3 === 0){
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

// Print numbers from 1 to 30.

// If divisible by 5, print "Buzz"
// Otherwise print the number itself.

for (let i = 1; i<=30; i++){
    if(i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}