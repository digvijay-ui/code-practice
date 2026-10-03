// triangle 

// for (let i = 1; i<=5; i++){
//     let row = ""

//     // for space 

//     for (let space = 1; space<= 5 - i; space++){
//         row = row + " "
//     }
//     // for star triangle 
//    for (let star = 1; star<= 2 * i -1; star++){
//     row = row + "*"
//    }
//    console.log(row)
// }


// // reversed triangle

// for (let i = 5; i>=1; i--){
//     let row = ""

//     // for space 

//     for (let space = 1; space<= 5 - i; space++){
//         row = row + " "
//     }
//     // for star triangle 
//    for (let star = 1; star<= 2 * i -1; star++){
//     row = row + "*"
//    }
//    console.log(row)
// }


// rigth angle triangle

// for (let i = 1; i<=5; i++){
//     let row = ""

//     for (let j = 1; j<=i; j++){
//         row = row + "*"
//     }
//     console.log(row)
// }

// // rigth angle triangle on the left side 

// for (let i = 1; i<=5; i++){
//     let row = ""

//     for (let j = 1; j<=i; j++){
//         row = row + "*"
//     }
//     console.log(row)
// }


// diamond triangle 

for (let i = 1; i<=5; i++){
    let row = ""

    // for space 
    for (let space = 1; space <= 5 - i; space++){
        row = row + " "
    }
    // for star
    for (let star = 1; star <= 2 * i - 1; star++){
        row = row + "*"
    }
    console.log(row)
}

for (let i = 4; i>=1; i--){
    let row = "";


    // for space 
    for (let space = 1; space <= 5 - i; space++){
        row = row + " "
    }
    // for star
    for (let star = 1; star <= 2 * i - 1; star++){
        row = row + "*"
    }
    console.log(row)
}

// flyroid triangle 

let number = 1;

for (let i = 1; i<=5; i++){
    let row = ""

    for (let j = 1; j<=i; j++){
        row = row + number + " "
        number++
    }
    console.log(row)
}

// hollow square 

for (let i = 1; i<=5; i++){
    let row  = ""

    for (let j = 1; j <=5; j++){
        if(i === 1 || i === 5 || j === 1 || j === 5){
            row = row + "*"
        } else {
            row = row + " "
        }
    }
    console.log(row)
}


// hollow triangle 

for (let i = 1; i<=5; i++){
    let row  = ""

    for (let j = 1; j <=i; j++){
        if(j === 1 || j === i || i === 5){
            row = row + "*"
        } else {
            row = row + " "
        }
    }
    console.log(row)
}


