// q1 

for(let i = 1; i<=8; i++) {
    let row = "";
    
    for(let j=1; j<=i; j++){
        row = row + "*"
    }
    console.log(row);
}

// second loop 

for (let i = 7; i>=1; i--){
    let row = "";
    
    for (let j = 1; j<=i; j++){
     row = row + "*"
    }
    
    console.log(row);
}



// q2 important 


for(let i =1; i<=5; i++){
    let row = ""
    
    // print space
    
    for(let space = 1; space<= 5 - i; space++){
        row = row + " ";
    }
    // print start
    for(let star = 1; star<= (2 * i -1); star++){
        row = row + "*"
    }
    console.log(row)
}
// q3 
for(let i = 1; i<=5; i++){
    let row = "";
    
    for (let j = 1; j<=i; j++){
        row = row + "&"
    }
    console.log(row);
}
