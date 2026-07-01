//  Product Stock Check

function checkStock (productName : string, qualityStock : number){
    if (qualityStock > 0){
        console.log(productName + " " + qualityStock + " is available in stock");
    } else {
        console.log(productName + " is out of stock");
    }
}
checkStock("shoes", 10);