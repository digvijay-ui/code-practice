// star pattern 

for (let i = 1; i<=5; i++){
    let row = ""

    // for space 
 for (let space = 1; space <= 5 - i; space++){
    row = row + " "
 }
// for star

 for (let star = 1; star <= 2 * i -1; star++){
    row = row + i
 }

console.log(row)
}

// triangle ( palindrome )

for (let i = 1; i<=5; i++){
    let row = ""

    // for space 
 for (let space = 1; space <= 5 - i; space++){
    row = row + " "
 }

 for (let j = 1; j<=i; j++){
    row = row + j
 }
 for (let j = i -1; j>=1; j--){
    row = row + j
 }
 console.log(row);
}

// hollow triangle
for (let i = 1; i<=5; i++){
    let row = ""

    // for space 
 for (let space = 1; space <= 5 - i; space++){
    row = row + " "
 }

 for (let j = 1; j<=2* i -1; j++){
    if(j === 1 || j === 2 * i - 1 || i === 5){
        row = row + "*"
    } else {
        row = row + " "
    }
 }
 console.log(row)
}