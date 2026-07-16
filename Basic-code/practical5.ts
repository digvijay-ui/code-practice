// discount calculator

function calculateDiscount(originalPrice : number , discountPrice : number){
    const discount = (originalPrice * discountPrice) / 100;
    const finalPrice = originalPrice - discount ;

    console.log(finalPrice);
}
calculateDiscount(5000,20);