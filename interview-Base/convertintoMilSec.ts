// convet the given hour into milisecond 

export function past(h: number, m: number, s: number): number  {
    h = h * 60 * 60 * 1000
    m = m * 60 * 1000
    s = s * 1000

    return + (h+m+s);
}


// 

for (let i = 1; i<5; i++){
    let row = ""

    // for space 

    for (let space = 1; space<= 5- i; space++){
        row = row + " "
    }

        // increasing number

        for (let j = 1; j<=i; j++){
            row = row + j
        }

        // decreasing the number

        for (let j = i - 1; j>=1; j--){
            row =row + j
        }
    
    console.log(row);
}


// hollow triangle 

for (let i = 1; i<=5; i++){
    let row = ""

    // for space 

    for (let space = 1; space<= 5- i; space++){
        row = row + " "
    }

    //triangle

    for (let j = 1; j<= 2 * i - 1; j++){
        if(j === 1 || j === 2 * i - 1 || i === 5){
            row = row + "*"
        } else {
            row = row + " "
        }
    }
    console.log(row);
}