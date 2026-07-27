// promise.race example 

async function fatestResponse(){
   const promise1 = new Promise ((resolve ,reject) => {
    setTimeout (() =>{
        resolve("API 1 response");
    },3000)
   });

   const promise2 = new Promise ((resolve ,reject) => {
    setTimeout (() =>{
        resolve("API 2 response");
    },1000)
   });

   const result = await Promise.race([
    promise1,
    promise2
   ]);

   console.log(result);

}

fatestResponse() ;