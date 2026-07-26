
const amount = 5000;

const promise  = new Promise ((resolve , reject) => {
    if (amount >= 1000){
        resolve ("Payment succesfull");
    } else {
        reject("Insufficent balance")
    }
})    

  promise 
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })


  // promise chaining
  
  const  promise = new Promise<number> ((resolve , reject) => {
     resolve(100);
  })
  .then((num) => {
    return num + 50
  })
  .then((num) => {
    return num / 5
  })
  .then((num) => {
    console.log(num)
  });

//  settimeout + promise 

const promise  = new Promise<string>((resolve , reject) => {
    setTimeout  (() =>{
        resolve("File Downloaded")
    },3000)
});

 promise
  .then((data)=> {
    console.log(data);
  })
  .finally(() => {
    console.log("Download Completed")
  });

  //  throw an error inside the .then

  const promise  = new Promise <string> ((resolve , reject) => {
     resolve("User Logges In")
  }) 

  promise 
   .then((data) => {
    console.log(data)
    throw new Error ("Session Expired");
   })
   .catch((error) => {
    console.log(error.message);
   })