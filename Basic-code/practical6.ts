// free deleviery 

function checkFreeDelivery(orderAmount:number){
    if (orderAmount >= 1000){
        console.log( "free delivery");
    } else {
        console.log("delivery charge applied");
    }

}
checkFreeDelivery(200);