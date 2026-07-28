// promise any

// async  function findFastestServer (){
//     const promise1 = new Promise ((resolve ,reject) => {
//         setTimeout(() => {
//             reject("Server A Fialed")
//         },1000)
//     });
//     const promise2 = new Promise ((resolve ,reject) => {
//         setTimeout(() => {
//             resolve("Server B connected")
//         },3000)
//     });

//     const result = await Promise.any([
//         promise1,
//         promise2
//     ]);
//     console.log(result);
// }
// findFastestServer();


// another example 

async function connectServer (){
    const promise1 = new Promise ((resolve , reject) => {
        setTimeout(() => {
            reject("Server A Failed")
        },1000)
    })
     const promise2 = new Promise ((resolve , reject) => {
        setTimeout(() => {
            reject("Server B Failed")
        },2000)
    })
     const promise3 = new Promise ((resolve , reject) => {
        setTimeout(() => {
            reject("Server C Failed")
        },3000)
    });
    try {
        const result = await Promise.any([
            promise1,
            promise2,
            promise3

            
        ])
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
    connectServer();