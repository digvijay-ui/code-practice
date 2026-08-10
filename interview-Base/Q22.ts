// plaindrom number triangle 


for (let i = 1; i<=4; i++){
    let row = ""

    // space 

    for (let space = 1; space<= 4 - i; space++){
        row = row + " "
    }
        // increasing number

        for (let j = 1; j<=i; j++){
            row = row  + j
        }

        // decreasing number
        for (let j = i - 1; j>=1; j--){
            row = row  + j
        }
    
    console.log(row);
}

// hollow triangle 

for (let i = 1; i<=5; i++){
    let row = ""

    // space 

    for (let space = 1; space <= 5 - i; space++){
        row = row + " "
    }

    // triangle 

    for( let j = 1; j<= 2 * i - 1; j++){
        if( j === 1 || j === 2 * i - 1 || i === 5){
            row = row + "*"
        } else {
            row = row + " "
        }
    }
    console.log(row);
}