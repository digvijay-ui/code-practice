 // create setTimeout after that resolved and finshed
 
 const promise = new Promise ((resolve ,reject) => {
     setTimeout(() => {
        resolve("User Data Loaded")
     },2000)
 });

   promise 
      .then((data) => {
        console.log(data)
      })
      .finally(() => {
        console.log("Request Finshed")
      });
      
      
// promise chaining 

const promise =  new Promise<number>((resolved , reject) => {
    resolved(5);
})
  promise 
    .then((num) =>{
       return num * 2
    })
    .then((num) => {
      return num + 10
    })
    .then((num) =>{
        console.log(num)
    });

    // throw erro iniside then 
const promise  = new Promise <string>((resovle ,reject) =>{
    resovle("user found");
})

promise 
  .then((data) => {
    console.log(data);
    throw new Error ("database error");
  })
  .catch((error) => {
    console.log(error.message);
  });

  //  Returning a Promise from .then() 

  const promise = new Promise <number> ((resolve , reject) => {
    resolve(5);
  });
   promise
     .then((num) => {
       return new Promise <number> ((resolve)=>{
        setTimeout(() =>{
            resolve(num * 10)
        },2000)
       });
     })
     .then((num)=> {
        console.log(num);
     })