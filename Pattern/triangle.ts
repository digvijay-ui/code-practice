// triangle 

for (let i = 1; i<=5; i++){
    let row = ""

    // for space 

    for (let space = 1; space<= 5 - i; space++){
        row = row + " "
    }
    // for star triangle 
   for (let star = 1; star<= 2 * i -1; star++){
    row = row + "*"
   }
   console.log(row)
}


// reversed triangle

for (let i = 5; i>=1; i--){
    let row = ""

    // for space 

    for (let space = 1; space<= 5 - i; space++){
        row = row + " "
    }
    // for star triangle 
   for (let star = 1; star<= 2 * i -1; star++){
    row = row + "*"
   }
   console.log(row)
}
