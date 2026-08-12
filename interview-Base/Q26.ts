// star pyramid 
for (let i = 1; i<=5; i++){
    let row = ""


    // for space 
  for (let space = 1; space <= 5 - i; space++){
    row = row + " "
}

// for star
 for ( let star = 1; star<= 2 * i - 1; star++){
    row = row + "*"
 }
 console.log(row);
}


for (let i = 4; i>=1; i--){
    let row = ""


    // for space 
  for (let space = 1; space <= 5 - i; space++){
    row = row + " "
}

// for star
 for ( let star = 1; star<= 2 * i - 1; star++){
    row = row + "*"
 }
 console.log(row);
}

// half diamond pattern

for (let i = 1; i<=5; i++){
    let row = ""

    for (let j = 1; j<=i; j++){
        row = row + "*"
    }
    console.log(row);
}
for (let i = 4; i>=1; i--){
    let row = ""

    for (let j = 1; j<=i; j++){
        row = row + "*"
    }
    console.log(row);
}

// floyd's Trinagle

for (let i = 1; i<=5; i++){
    let row = ""

    for (let j = 1; j<=i; j++){
        if((i + j) % 2 === 0){
            row = row + "1"
        } else {
            row = row + "0"
        }
    }
    console.log(row);
}

// floyd's increase number 

let number = 1;
for (let i = 1; i<=5; i++){
    let row = ""

    for(let j = 1; j<=i; j++){
        row = row + number + " "
        number++
    }
   console.log(row)
}


for (let i = 1; i<=5; i++){
    let row = ""


    // for space 
  for (let space = 1; space <= 5 - i; space++){
    row = row + " "
  }
 // for increase 
   for (let j = 1; j<=i; j++){
    row = row + j
   }
   // for decrease

   for (let j = i - 1; j>=1; j--){
    row = row + j
   }

   console.log(row);

}

//  number  trinagle 
for (let i = 1; i<=5; i++){
    let row = ""


    // for space 
  for (let space = 1; space <= 5 - i; space++){
    row = row + " "
}

// for star
 for ( let j = 1; j<= 2 * i - 1; j++){
    row = row + j
 }
 console.log(row);
}
// hollow pattern 

for (let i = 1; i<=5; i++){
  let row = ""
  // for space 
    for (let j = 1; j<=5; j++){
      if(i === 1 || i === 5 || j === 1 || j === 5){
        row = row + "*"
      } else {
        row = row + " "
      }
    }
      console.log(row);
  }

// hollow triangle 

for (let i = 1; i<=5; i++){
  let row = ""
  // for space 
  for (let space = 1; space<= 5 - i; space++){
    row = row + " "
  }

    for (let j = 1; j<= 2 * i -1; j++){
      if(j === 1 || j === 2 * i - 1 ||  i === 5){
        row = row + "*"
      } else {
        row = row + " "
      }
    }
      console.log(row);
  }
