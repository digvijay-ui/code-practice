// callback 

function calculate ( length : number, width: number ,
     callback:(length : number, area : number) =>number) : void {

        const result = callback(length ,width)
        console.log(result);
     }
     calculate (5,10 , function(length , width){
        return length * width
     });

     //

     const promise  = new Promise ((resolve , reject) => {
            setTimeout(() =>{
                resolve("Payment Succesfull")
            },2000);
     })
     promise
      .then((data)=> {
        console.log(data)
      })
      .finally(() => {
        console.log("Transaction Finshed")
      })
      
 //  as
 
 async function login () {
    const promise = new Promise ((resolve , reject) => {
        reject("Invalid username")
    });

    try {

    const result = await promise
    console.log(result);

    } catch(error) {
        console.log(error)
        
    }
 }
 login()

 // Promise.race()

 async function loadtest() {
    const promise1 = new Promise ((resolve , reject) => {
        setTimeout(() =>{
            resolve("Server A");
        },4000);
    })
    const promise2 = new Promise ((resolve , reject) => {
        setTimeout(() =>{
            resolve("Server B");
        },2000);
    });
  const result  = await Promise.race([
    promise1,
    promise2
  ])
console.log(result);
    
 }
 loadtest();