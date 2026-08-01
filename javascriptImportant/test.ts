

function missingNumber(nums){
    let n = nums.length;


    let exepectedOutput = 0;
    for(let i = 0; i<=n; i++){
        exepectedOutput += i;
    }

    let actualSum = 0;
    for(let i = 0; i<nums.length; i++){
        actualSum += nums[i];
    }

    return   exepectedOutput - actualSum 
}
console.log(missingNumber([3,0,1]));


Input: nums = [0, 1]
Output: 2

 function missingNumber(nums) {
    let n = nums.length;

    let exppectedOutput = 0;
    for(let i = 0; i<=n; i++){
        exppectedOutput = exppectedOutput + i
    }

    let actualSum = 0;
    for(let i = 0; i<nums.length; i++){
        actualSum += nums[i];
    }

    return exppectedOutput - actualSum
 }

console.log(missingNumber([0,1]));

let a = 10;

function test(): void {
  let a = 20;
  console.log(a);
}

test();
console.log(a);

let x = 5;

function outer(): void {
  let x = 10;

  function inner(): void {
    console.log(x);
  }

  inner();
}

outer();
console.log(x);

let count = 1;

function increase(): void {
  count += 2;
  console.log(count);
}

increase();
increase();
console.log(count);

function createCounter() {
  let count = 0;

  return function (): void {
    count++;
    console.log(count);
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1();
counter1();
counter2();
counter1();

const numbers = [1, 2, 3];

const result = numbers.map((number) => {
  return number * 2;
});

console.log(result);
console.log(numbers);

const numbers = [10, 15, 20, 25];

const result = numbers.filter((number) => {
  return number > 15;
});

console.log(result);
console.log(numbers);


console.log("A");

setTimeout(() => {
  console.log("B");

  Promise.resolve().then(() => {
    console.log("C");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("D");
});

console.log("E");

