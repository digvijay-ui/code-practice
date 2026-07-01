// cart checkout
function checkCartCheckOut (isLoggedIn : boolean , CartItem : string[]){
    if (isLoggedIn === true){
        if(CartItem.length >0){
            console.log("process to checkout");
        } else {
            console.log("your cart is empty");
        }
        
    } else {
        console.log("please login");
    }
}
checkCartCheckOut(true, ["shoes","t-sirt"]);