// Find the frequency of each number in this array

 const number = [2, 3, 2, 5, 3, 2];

 for (let i = 0; i<number.length; i++){
    if(number.indexOf(number[i]) === i){
        let count = 0;
    

    for ( let j = 0; j<number.length; j++){
        if(number[j] === number[i]){
            count++;
        }
    }
    console.log(number[i] + " appears " + count + " times ");
}

 }
