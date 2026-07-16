// check Bank withdrawal

function checkWithdraw( balance : number , withdrawlAmount : number){
    if(withdrawlAmount <= balance){
        console.log("withdrawl successful");
    } else{
        console.log("insufficient balance");
    }

}
checkWithdraw(5000,2000);