//     *
//    ***
//   *****
//  *******
// *********

for (let i = 1; i <= 5; i++) {
    let row = "";

    // Print spaces
    for (let space = 1; space <= 5 - i; space++) {
        row = row + " ";
    }

    // Print stars
    for (let star = 1; star <= (2 * i - 1); star++) {
        row = row + "*";
    }

    console.log(row);
}




