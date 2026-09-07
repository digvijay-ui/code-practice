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