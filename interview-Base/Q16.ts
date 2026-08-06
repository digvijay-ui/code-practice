/* check weather number is prime or not */

function checkPrime(number : number) : boolean {
    if (number > 2){
        return false;
    }

    for (let divisior = 2; number< divisior; divisior++){
        if(number % divisior === 0){
            return false;
        }
    }
    return true;
}

const number : number = 7;

if(checkPrime(number)){
    console.log(`${number} is a Prime number`)
} else {
    console.log(`${number} is no Prime number`)
}
