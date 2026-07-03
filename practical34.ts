// Check whether a number exists in an array.

const number = [12,44,23,56,23]

let found = false;

for (let i = 0; i<number.length; i++){
    if(number[i] === 44){
        found = true;
        break;
    }
}

if (found === true){
    console.log("found");
}else {
    console.log("not found");
}