// alphabet palindrome

// for (let i = 1; i<=7; i++){
//     let row = ""

//     // for space 

//     for (let space = 1; space <= 7 - i; space++){
//         row = row + " "
//     }
//         // for increasing number;

//         for (let j = 1; j<=i; j++){
//             row = row + String.fromCharCode(64 + j)
//         }

//         // decreasing
//         for (let j = i - 1; j>=1; j--){
//             row = row + String.fromCharCode(64 + j)
//         }
    
//     console.log(row)
// }

// alphabet triangle
// for (let i = 1; i<=7; i++){
//     let row = ""

//     // for space 

//     for (let space = 1; space <= 7 - i; space++){
//         row = row + " "
//     }

//     // alphabet

//     for (let j = 1; j <= i; j++){
//         row = row + String.fromCharCode(64 + j) + " "
//     }
//    console.log(row);
// }

// square star pattern

for (let i = 1; i<=5; i++){
    let row = ""

    for (let j = 1; j<=5; j++){
        row = row + "*"
    }
    console.log(row);
}

// right angle star pattern


for (let i = 1; i<=5; i++){
    let row = ""

    for (let j = 1; j<=i; j++){
        row = row + "*"
    }
    console.log(row);
}

//Increasing Number Triangle 

for (let i = 1; i<=5; i++){
    let row = ""

    for (let j = 1; j<=i; j++){
        row = row + j
    }
    console.log(row);
}

// repating number triangle
for (let i = 1; i<=5; i++){
    let row = ""

    for (let j = 1; j<=i; j++){
        row = row + i
    }
    console.log(row);
}

// reverse triangle 

for (let i = 5 ; i>=1; i--){
    let row = ""

    for (let j = 1; j<=i; j++){
        row = row + "*"
    }
    console.log(row);
}

// reverse triangle 

for (let i = 5 ; i>=1; i--){
    let row = ""

    for (let j = 1; j<=i; j++){
        row = row + j
    }
    console.log(row);
}

// alphabet right angle 
for (let i = 1; i<=5; i++){
    let row = ""

    for (let j = 1; j<=i; j++){
        row = row + String.fromCharCode(64 + j) 
    }
    console.log(row);
}


// reverse triangle 
for (let i = 5; i>=1; i--){
    let row = ""

    for (let j = 1; j<=i; j++){
        row = row + String.fromCharCode(64 + j) 
    }
    console.log(row);
}

