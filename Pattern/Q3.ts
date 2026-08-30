// practice 

for(let i  = 1; i<=5; i++){
    let row = ""


// for space 
for(let space = 1; space<= 5 - i; space++){
    row = row + " "
}
// for star
for(let star = 1; star<= 2 * i - 1; star++){
    row = row + "*"
}
console.log(row);

}

// uncommon character

const word1 = ("digvijay");
const word2 = ("rajput");

let uncommon = ""

for (let i = 0; i<word1.length; i++){
    if(!word2.includes(word1[i]) && !uncommon.includes(word1[i])){
        uncommon = uncommon + word1[i]
    }
}
    for (let i = 0; i<word2.length; i++){
    if(!word1.includes(word2[i]) && !uncommon.includes(word2[i])){
        uncommon = uncommon + word2[i]
    }
}

console.log(uncommon)

// make triangle of the number 


  let num = 1
for (let i = 1; i<=4; i++){
    let row ="";

    for(let j = 1; j<=i; j++){
        row = row + num
        num++
 
    }
    console.log(row)
}


// 
export function isPostive(num : number) : boolean {
  
        if(num >= 0){
            return true
        } else{
            return false
        }
    
}
console.log(isPostive(5))

// pattern of right angle triangle 


for (let i = 1; i<=5; i++){
    let row = "";

    for(let j = 1; j<=i; j++){
        row = row + j
    }
    console.log(row)
}

// 

for (let i = 1; i<=5; i++){
    let row = "";

    for(let j = 1; j<=i; j++){
        row = row + i
    }
    console.log(row)
}

// reversed right angke triangle
for (let i = 5; i>=1; i--){
    let row = "";

    for(let j = 1; j<=i; j++){
        row = row + "*"
    }
    console.log(row)
}