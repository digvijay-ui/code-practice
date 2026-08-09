// hollow pattern 
// *****
// *   *
// *   *
// *   *
// *****
// for (let i = 1; i<=5; i++){
//     let row = ""

//     for (let j = 1; j<= 5; j++){
//             if(i === 1 || i === 5 || j === 1 || j=== 5 ){
//             row = row + "*"
//         } else {
//             row = row + " "
//         }
//     }
//     console.log(row);
// }

// 
// 1
// 12
// 123
// 1234
// 12345


// for (let i = 1; i<=5; i++){
//     let row = ""

//     for (let j = 1; j<= i; j++){
//         row = row + j
//     }
//     console.log(row)
// }


// 1
// 22
// 333
// 4444
// 55555

// for (let i = 1; i<=5; i++){
//     let row = ""

//     for (let j = 1; j<=i; j++){
//         row = row + i
//     }
//     console.log(row);
// }

// 
// 1
// 2 3
// 4 5 6
// 7 8 9 10 

let number = 1;

for (let i = 1; i<=4; i++){
    let row = ""

    for (let j = 1; j<=i; j++){
        row = row + number + " ";
        number++
    }
    console.log(row)
}