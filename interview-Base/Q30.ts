// highest scoring word

export const high = (str : string) : string => {
    const word = str.split(" ");
    let highestScore = 0;
    let highestWord = ""

    for(let i = 0; i<word.length; i++){
        let currentScore = 0;

        for(let j = 0; j<word[i].length; j++){
            currentScore = currentScore + (word[i][j].charCodeAt(0) - 96);
        }
        if(currentScore > highestScore){
            highestScore = currentScore;
            highestWord = word[i]
        }
    }
    return highestWord
}

console .log(high("man i need the taxi"))


// test a : 1 , b : 2, c: 3

export function number (array : string[]): string[]{
    let result : string[] = [];

    for(let i = 0; i<array.length; i++){
        const numberString = `${i + 1}: ${array[i]}`;
        result.push(numberString);
    }
    return result;
}

console.log(number(["a","b","c"]))

// find the next perfect square 

export function findSquareNumber(sq:number): number{
    for (let i = 0; i * i <=sq; i++){
        if(i * i === sq){
            const next = i + 1;
            return next * next;
        }
    }
    return -1
}
console.log(findSquareNumber(4))