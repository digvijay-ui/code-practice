// hollow pattern 

for (let i = 1; i<=5; i++){
    let row = ""

    for (let j = 1; j<=5; j++){
        if(i === 1 || i === 5 || j === 1 || j === 5){
            row = row + "*"
        } else {
            row = row + " "
        }
    }
    console.log(row)
}



for (let i = 1; i<=5; i++){
    let row = ""

    for (let j= 1; j<=i; j++){
        row = row + String.fromCharCode(64 + j)
    }
    console.log(row);
}



for (let i = 1; i<=5; i++){
    let row = ""

    for (let j= 1; j<=i; j++){
      if((i + j) % 2 === 0){
        row = row + "1"
      } else {
        row = row + "0"
      }
    }
    console.log(row);
}

//  Floyd's trianagle

let number = 1;

for (let i = 1; i<=4; i++){
    let row = ""

    for (let j = 1; j<=i; j++){
        row = row + number + " "
        number++
    }
    console.log(row);
}

// revere number triangle 

for (let i = 5; i>=1; i--){
    let row = ""

    for (let j = 1; j<=i; j++){
        row = row + i
    }
    console.log(row)
}


//  reverse number in triangle 

for (let i = 1; i<=5; i++){
    let row = "";

    for (let j = 1; j<=i; j++){
        row = row + j
    }
    console.log(row);
}
