// Diamond 

// for (let i = 1; i<=5; i++){
//     let row = ""

//     // space 

//     for (let space = 1; space <= 5 - i; space++){
//         row = row + " "
//     }
//     // star

//     for (let star = 1; star <= 2 * i - 1; star++){
//         row = row + "*"
//     }
//  console.log(row);
// }

// for (let i = 4; i>=1; i--){
//     let row = ""

//     // space 

//     for (let space = 1; space <= 5 - i; space++){
//         row = row + " "
//     }
//     // star

//     for (let star = 1; star <= 2 * i - 1; star++){
//         row = row + "*"
//     }
//  console.log(row);
// }


// palindrome pyramid

for (let i = 1; i<=5; i++){
    let row = ""

    // space 

    for (let space = 1; space <= 5 - i; space++){
        row = row + " "
    }
 // increasing
    
   for (let j = 1; j<=i; j++){
    row = row + j
   }

   // decreasing
   
   for (let j = i - 1; j>=1; j--){
    row = row + j
   }
console.log(row);
}


 // alphabet Triangle 

for (let i = 1; i<=5; i++){
    let row = ""

    // for alphabet 

    for (let j = 1; j<=i; j++){
        row = row + String.fromCharCode(64 + j)
    }
    console.log(row);

}