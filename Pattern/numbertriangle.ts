// number triangle 

for (let i = 1; i<=5; i++){
    let row = ""

    for (let j = 1; j<=i; j++){
        row = row + j
    }
    console.log(row)
}

// flyorid triangle 

let number = 1;

for (let i = 1; i<=5; i++){
    let row = ""

    for (let j = 1; j<=i; j++){
        row = row + number + " ";
        number++
    }
    console.log(row)
}

// hollow square 
for (let i = 1; i<=5; i++){
    let row = ""

    for(let j = 1; j<=5; j++){
        if(i === 1 || i === 5 || j === 1 || j === 5){
            row = row + "*"
        } else {
            row = row + " "
        }
    }
    console.log(row)
}


// hollow triangle 
for (let i = 1; i<=5; i++){
    let row = ""

    for (let j = 1; j<=i; j++){
        if(j === 1 || j === i || i === 5 ){
            row = row + "*"
         } else  {
            row = row + " "
         }
     }
     console.log(row);
}