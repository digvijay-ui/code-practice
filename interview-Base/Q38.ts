// Array + method

type User = {
  name: string;
  active: boolean;
};

const users: User[] = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true }
];

const checkUser = users.filter((user) => {
    return user.active === true
})
console.log(checkUser)

// simple greet message

export function greet(name : string) : string{
  return "hello world!"
}
console.log(greet("digvijay "))

// your order first 

export function order(words : string) : string {
  if(words === ""){
    return "";
  }

  const arr = words.split(" ");

  arr.sort((a,b) => {
    const numA = Number(a.match(/\d/)?.[0]);
    const numB = Number(b.match(/\d/)?.[0]);

    return  numA - numB;
  });

  return arr.join(" ");
}

console.log(order("is2 there1 a3 test4"));

// find the longest word 

const  sentence = ("I am learning Typescript");

const word = sentence.split(" ");

let longestWord = word[0];

for(let i = 0; i<word.length; i++){
  if(word[i].length > longestWord.length){
    longestWord = word[i]
  }
}
console.log(longestWord);

// move all zero

const number = [2,3,5,0,2,0,1,0];

let result : number[] = [];

for(let i =  0; i<number.length; i++){
  if(number[i] !== 0){
    result.push(number[i]);
  }  
}
for(let i =  0; i<number.length; i++){
  if(number[i] === 0){
    result.push(number[i]);
  }  
}
console.log(result)


// first repating-character

export function findFirstRepating(str : string) : string {

  for(let i = 0; i<str.length; i++){
    if(str.indexOf(str[i]) !== str.lastIndexOf(str[i])){
     return str[i]
    }
  }
  return ""
  
}
console.log(findFirstRepating("abca"));


//  Find Intersection Count

export function IntersectionCount( a : number[] , b : number[]) : number {
  let count = 0;
  let common : number[] = [];

  for (let i = 0; i<a.length; i++){
    if(b.includes(a[i]) && !common.includes(a[i])){
      common.push(a[i]);
      count++
    }
  }
  return count
}

console.log(IntersectionCount([1, 2, 2, 3, 4], [2, 3, 5]))

// pattern 

for (let i = 1; i<=5; i++){
  let row = ""

  for (let j = 1; j<=i; j++){
    row = row + j
  }
  console.log(row)
}


// remove the first and last character 
export function removeChar(str: string): string {
  let result = ""
  
  for (let i = 1; i< str.length -1; i++){
    result = result + str[i]
  }
  return result
}
console.log(removeChar("hello"));