// unique in order

export function uniqueInOrder (iterable: string | (string | number)[]):(string | number)[] {
  let result : (string | number)[] = []

  for (let i = 0; i< iterable.length; i++){
    if(i === 0 || iterable[i] !== iterable[i - 1]){
        result.push(iterable[i])
    }
  }
  return result
}
console.log(uniqueInOrder("AAAABBBCCDAABBB"));

// array diff

export function arrayDiff(a : number[] , b : number[]) : number[]{
  const result  : number[] =[]
  
  for (let i = 0; i<a.length; i++){
    if(!b.includes(a[i])){
      result.push(a[i])
    }
  }
  return result
}
