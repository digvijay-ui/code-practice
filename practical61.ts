 // print 

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

for ( let i = 1; i<=5; i++){
    let row = ""
     for (let j = 1; j<=i; j++){
        row  = row + "*"
     }
  console.log(row);
}

//  secondouter loop
for ( let i = 4; i>=1; i--){
    let row = ""
     for (let j = 1; j<=i; j++){
        row  = row + "*"
     }
  console.log(row);
}