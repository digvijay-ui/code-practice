// print 

for ( let i = 1; i<=5; i++){
  let row = ""


  /// spacee 

  for (let space = 1 ; space <= 5-i; space++){
    row = row + " ";
  }

  // star
  for ( let star = 1; star <= (2 * i - 1); star++){
    row = row + "*"
  }

  console.log(row);

}

for ( let i = 1; i <= 4 ; i++){
  let row = " "


// for space 

for ( let space = 1; space <= i-1; space++){
  row = row + " ";
}

// for star 
for ( let star = 1; star<= 2 * (4 - i) + 1; star++){
     row = row + "*"
}  
  
   console.log(row);

}