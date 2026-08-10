// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


export function countSheep(num : number): string {
  let result = "";

  for (let i = 1; i<=num; i++){
    result = result + i + " sheep..."
  }
  return result;
}

console.log(countSheep(3));

// reverse string 

export const digitize = (n: number): number[] => {
   const str  = n.toString();
  let reverse : number[] = []
  
  for (let i = str.length - 1; i>=0; i--){
    reverse.push(Number(str[i]))
  }
 return reverse
};  