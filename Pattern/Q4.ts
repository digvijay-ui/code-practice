

// reversed right angke triangle

for (let i = 1; i<=5; i++){
    let row = "";
   for(let space = 1; space <= 5 - i; space++){
        row = row + " "
    }
    for(let j = 1; j<=i; j++){
        row = row + "*"
    }
    console.log(row)
}

for (let i = 4; i>=1; i--){
    let row = "";
 
    for(let space = 1; space <= 5 - i; space++){
        row = row + " "
    }

    for(let j = 1; j<=i; j++){
        row = row + "*"
    }
    console.log(row)
}


// there 

for (let i = 1; i<=5; i++){
    let row = "";

    for(let j = 1; j<=i; j++){
        row = row + j
    }
    console.log(row)
}

for (let i = 4; i>=1; i--){
    let row = "";
 
    for(let j = 1; j<=i; j++){
        row = row + j
    }
    console.log(row)
}

// palindrome numbe triangle 

for (let i = 1; i<=5; i++){
    let row = ""

    for (let space = 1; space<= 5 - i; space++){
        row = row + " "
    }
     
    // for increasing 

    for(let j = 1; j<= i; j++){
        row = row + j
    }
    for (let j = i - 1; j>=1; j--){
        row = row + j
    }
    console.log(row)
}