// check whether string contain only digit 


const value = "2005";

let onlyDigit = true;

for(let i = 0; i<value.length; i++){
    if(!(value[i] >= "0" && value[i] <= "9") )
    onlyDigit = false;
}

 if (onlyDigit){
    console.log("Only Digit");
 } else {
    console.log("Not only Digit");
 }