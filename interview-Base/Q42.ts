// pattern 

for(let i = 1; i<=5; i++){
    let row = ""

    for(let j = 1; j<=i; j++){
        row = row + "*"
    }
    console.log(row);
}

// triangle pattern
for (let i = 1;i<=5; i++){
    let row = ""

    for (let space = 1; space<= 5 - i; space++){
        row = row + " "
    }


    for (let star = 1; star<= 2 * i -1; star++){
        row = row + "*"
    }
    console.log(row)
}

// hollow
for (let i = 1;i<=5; i++){
    let row = ""

    for (let j = 1; j<=5; j++){
        if(j === 1 || j === 5 || i === 5 || i === 1){
            row = row + "*"
        } else {
            row = row + " "
        }
    }
    console.log(row);
}

// hollow triangle pattern 

for (let i = 1;i<=5; i++){
    let row = ""

    for (let j = 1; j<=i; j++){
        if(j === 1 || j === i || i === 5 ){
            row = row + "*"
        } else {
            row = row + " "
        }
    }
    console.log(row);
}

// reverse right angle 

for(let i = 5; i>=1; i--){
    let row = ""

    for(let j = 1; j<=i; j++){
        row = row + j
    }
    console.log(row);
}

// right angle number 
for(let i = 1; i<=5; i++){
    let row = ""

    for(let j = 1; j<=i; j++){
        row = row + i
    }
    console.log(row);
}

// flyorid trinagle 
let num = 1;
for(let i = 1; i<=4; i++){
    let row = ""
     
  

    for(let j = 1; j<=i; j++){
        row = row + num + " "
        num++
    }
    console.log(row);
}