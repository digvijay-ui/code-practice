// load the result

const promsie = new Promise((resolve , reject) =>{
   resolve("Data Loaded succesfully"); 
});

promsie.then((data) => {
    console.log(data);
 }); 

// Throw the error

const promise = new Promise((resolve , reject) => {
  
    reject("Network error")
})

promise.catch((error) => {
    console.log(error);
})

// using the both resolve and reject
const age  = 20;

const promise = new Promise((resolve , reject) => {
  
    if (age >= 18){
        resolve("Eligible to vote");
    } else {
        reject ("Not Eligible to vote");
    }

})
 promise 
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=> {
        console.log(error)
    });

// create setTimeout after that throw error

const promise = new Promise ((resolved , reject) => {
    setTimeout(() => {
        reject("Server error")
    }, 2000);
})
  
promise
   .catch((error) => {
    console.log(error)
   });
   
   // create setTimeout after that throw successfull

const promise  = new Promise ((resolved , reject) => {
    setTimeout(() =>{
        resolved("User data Loaded")
    },2000)
})

 promise 
   .then((data) => {
    console.log(data);
   })
   
// 



   