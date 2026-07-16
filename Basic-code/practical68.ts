// Print this pattern:
// 1
// 21
// 321
// 4321
// 54321


for ( let i = 1; i<=5; i++){
    let row = ""


    // inner loop

    for ( let j = i; j>=1 ; j--){
        row = row + j;
    }

    console.log(row);
}