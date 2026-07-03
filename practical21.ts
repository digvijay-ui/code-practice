// Find the count of even numbers from 1 to 20.

let count = 0;

for (let i =1; i<=20; i++){
    if (i % 2 === 0){
     count = count + 1;
    }
}
console.log(count);

// Find the count of odd numbers from 1 to 20.

let count = 0;

for (let i =1; i<=20; i++){
    if (i % 2  !== 0){
     count = count ++;
    }
}
console.log(count); 