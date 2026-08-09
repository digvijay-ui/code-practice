// diamond pattern 

for (let i = 1; i<= 4; i++){
    let row = ""

    // for space loop
    for (let space = 1; space <= 4 - i; space++){
        row = row + " "
    }

    // for star loop 
    for (let star = 1; star <= 2 * i -1; star++){
        row = row + "*"
    }
    console.log(row);
}

for (let i = 3; i>=1; i--){
    let row = ""

    // for space loop
    for (let space = 1; space <= 4-i; space++){
        row = row + " "
    }

    // for star
    for (let star = 1; star<= 2 * i - 1; star++){
        row = row + "*"
    }
    console.log(row);
}
