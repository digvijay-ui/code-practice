// check string is palindrome are not 

const word = "digvijay rajput";

let result = ""

for(let i = word.length-1; i>=0; i--){
    result = result + word[i];
}
    if(word === result){
        console.log("is Palindrome")
    } else{
     console.log("not plaindrome");
    }

// reversed array

const number = [1,2,3,4,5]

const reversed : number[] = []

for(let i = number.length -1; i>=0; i--){
    reversed.push(number[i])
}
console.log(reversed)

// check weather number is prime number or not 

function checkPrime (number : number) : boolean {
    if(number > 2){
        return false
    }

    for (let divisior = 2; number<divisior; divisior++){
        if (number % divisior === 0){
            return false
        }
    }
    return true
}
    const number : number = 3
    if(checkPrime(number)){
        console.log(`${number} is Prime number`)
    }else{
        console.log(`${number} not prime number`)
    }


// print the prime number 
for (let number = 2; number<=100; number++){
    let isPrime = true;

    for(let divisior = 2; divisior<number ; divisior++ ){
       if(number % divisior === 0){
        isPrime = false;
        break;
       }

    }
    if(isPrime){
        console.log(number);
    }
}

//  check number is armstrong

function isArmstrong(num : number) : boolean{
    const digits = num.toString();
    const power = digits.length;
    
    let sum = 0;

    for (let i = 0; i<digits.length; i++){
        sum = sum + Number(digits[i]) ** power
    }

    return sum === num;
}

console.log(isArmstrong(153));

// check perfect number 

function isPerfect(num : number) : boolean {
    let sum = 0;

    for (let i = 0; i<num; i++){
        if(num % i === 0){
            sum =sum + i
        }
    }
    return sum === num
}

console.log(isPerfect(6));

// count digit of number

function checkCount(num:number) : number {
const str = num.toString();   
let count = 0;
for (let i = 0; i<str.length; i++){
    count = count + 1
}
return count;
}
console.log(checkCount(12345));


// sum of digit of number 
function checkSum (num : number) : number {
    const str = num.toString();
    let sum = 0;

    for(let i = 0; i<str.length; i++){
        sum = sum + Number(str[i])
    }
    return sum
}

console.log(checkSum(123));


const number = [1,2,3];
let sum = 0;

for (let i = 0; i<number.length; i++){
    sum = sum + number[i]
}

console.log(sum)

// check vowel and consonant 

const word = "digvijay"
const vowel = "a,e,i,o,u"

let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i<word.length; i++){
    if(vowel.includes(word[i])){
        vowelCount++
    } else {
        consonantCount++
    }
}
console.log(vowelCount)
console.log(consonantCount);

// find the gdc  of two number 

function findGcd(a : number , b : number) : number {
    while(b !== 0){
        const temp  = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(findGcd(50,75));


//  find the lcm of two number 

function findLcm (a:number , b : number) : number {
  let lcm = a > b ? a: b;

  while(true){
    if(lcm % a === 0 && lcm % b === 0){
        return lcm
    }
    lcm++
  }
}
console.log(findLcm(4,6));