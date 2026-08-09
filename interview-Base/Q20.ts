// 
// A
// AB
// ABC
// ABCD
// ABCDE

// for (let i = 1; i<=5; i++){
//     let row = ""

//     for (let j= 1; j<=i; j++){
//         row = row + String.fromCharCode(64 + j)
//     }
//     console.log(row);
// }

// 


// for (let i = 1; i<= 5; i++){
//     let row = ""

//     for (let j = 1; j <=i; j++){
//         if((i + j) % 2 === 0){
//             row = row + "1"
//         } else {
//             row = row + "0"
//         }
//     }
//     console.log(row);
// }




for (let i = 1; i<=5; i++){
    let row = ""

    for (let j= 1; j<=i; j++){
        row = row + i
    }
    console.log(row)
}

const word1 = "hospital"
const word2 = "hostel";


let uncommon = "";

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


