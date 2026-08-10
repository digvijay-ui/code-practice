// 

// async function loadTest(){
//     const promise1 = new Promise ((resolve , reject) => {
//         setTimeout (() => {
//             reject("Server A")
//         },2000)
//     }) 
//   const promise2 = new Promise ((resolve , reject) => {
//         setTimeout (() => {
//             resolve("Server B")
//         },3000)
//     })   

//     try {
//         const result = await Promise.race([
//             promise1,
//             promise2
//         ])
//         console.log(result)
//     } catch (error) {
//        console.log("Error caught:", error);
//     }
// }

// loadTest();

// promise only 

// const promise = new Promise ((resolve ,reject) => {
//      setTimeout(() => {
//         resolve("Hello Digvijay")
//      }, 2000)
// })
// .then ((data) => {
//     console.log(data)
// })
// .finally(()=>{
//     console.log("Bye")
// }) 

//  hollow triangle 

// for (let i = 1; i<=5; i++){
//     let row = ""

//     // for space 
//    for (let space = 1; space<= 5 - i; space++){
//     row = row + " "
//    }

//    // fpr triangle 
//    for (let j = 1; j <= 2 * i - 1; j++){
//         if ( j === 1 || j === 2 * i - 1 || i === 5){
//             row = row + "*"
//         } else {
//             row = row + " "
//         }
//    }
//  console.log(row);
// }


// fizbuzz
// if number divisble by 3 and 5 print fizzbuzz 

    for(let i = 1; i<=50; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz")
        } else if (i  % 3 === 0){
            console.log("Fizz")
        } else if (i % 5 === 0){
            console.log("buzz")
        } else{
            console.log(i)
        }
    }


