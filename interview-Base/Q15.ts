/* Print prime numberfrom 1 to 100 */

for(let number = 2; number<= 100; number++){
    let isPrime = true;

   for(let divisior = 2; divisior<number; divisior++){
    if(number % divisior === 0){
        isPrime = false;
        break;
    }
   }
   if(isPrime){
    console.log(number);
   }

}