//

function calculate (
        a : number,
        b : number,
        callback : (x : number, y: number) => number) {
           const result =  callback(a,b);
           console.log(result);
        }

        calculate (5,10, function(x : number, y: number){
            return(x + y);
        })
//

  function processUser (
    name : string,
    callback : (name : string) => string
  ) {
    const result = callback(name);
    console.log(result);
  }

  processUser("digvijay", function(name : string){
    return  "hello " + name
  })


// function printMessage ( message : string){
//     console.log("welcome to " + message);

// }

function processMessage ( callback :( message : string) => void){
     callback("Type script")
} 
processMessage(printMessage);



  
  function processNumbers  ( numbers : number[] , callback:( numbers : number[]) => number): void {

   const newArray : number[] = [];

   for(let i = 0; i<numbers.length; i++){
    const result = callback(numbers[i]);
    newArray.push(result);
   }
    console.log(newArray);
  }

  processNumbers([1,2,3,4], function(num : number) {
     return num * 2;
  } );

