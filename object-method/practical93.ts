// promise all 

// async function loadEverything () {
//     const promise1  = new Promise((resolve ,reject) => {
//         setTimeout (() => {
//             resolve("Load User")
//         },2000);
// });
//         const promise2  = new Promise ((resolve, reject) => {
//             setTimeout (() => {
//                 resolve("Order Loaded");
//             },1000);
//         });
//         const[user , orders] = await Promise.all([
//         promise1,
//         promise2
//         ]);

//         console.log(user);
//         console.log(orders);

//     }
   
// loadEverything();

/* What happens if one Promise fails in Promise.all()? */

// async function loadEverything (){
//     const promise1 = new Promise ((resolve , reject) => {
//         setTimeout (() => {
//             resolve("Load User")
//         },2000)
//     });

//     const promise2 = new Promise ((resolve ,reject) => {
//         setTimeout (() => {
//             resolve("Order Loaded")
//         },1000);
//         });
//    try {
//     const [user , order] = await Promise.all([
//         promise1,
//         promise2
//     ]);

//     console.log(user);
//     console.log(order);
//    } catch(error) {
//     console.log(error);

//    }
// }
// loadEverything();

// Promise.all() + try...catch

// async function loadProfile  () {
//     const promise1 = new Promise ((resolve , reject) => {
//         setTimeout(() =>{
//             resolve("Profile Loaded")
//         },2000) 
//     });
//     const promise2 = new Promise ((resolve , reject) => {
//         setTimeout(() => {
//             reject("Post fail to load")
//         },1000);
//     });
//     try{

//     const [user ,order] = await Promise.all ([
//         promise1,
//         promise2
//     ]);
//     console.log(user);
//     console.log(order);
//     } catch(error){
//      console.log(error);

//     }
// }

// loadProfile();

// Promise.allSettled()

async function loadDashboard () {
    const promise1 = new Promise ((resolve ,reject) => {
        setTimeout (() => {
            resolve("User Loaded")
        },2000)
    });
    const promise2 = new Promise ((resolve ,reject) => {
        setTimeout (() => {
            reject("Order Failed")
        },1000)
    });
    const result = await Promise.allSettled([
        promise1,
        promise2

        
    ])
    console.log(result);
    
}
loadDashboard()