/* Find the frequency of each array element */

const number = [1,2,3,4,2,3,5,2];

for (let i = 0; i<number.length; i++){
    if (number.indexOf(number[i]) === i){
        let count = 0;


        for(let j = 0; j<number.length; j++){
            if(number[j] === number[i])
                count++
        
        }

        console.log(number[i] + " appear " + count + " times ")
    }
        
}