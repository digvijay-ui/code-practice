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