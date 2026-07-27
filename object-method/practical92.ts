// 
    // async function displayMessage ()  {
    //     const promise = new Promise<string> ((resolve)=>{
    //         resolve("hello typescript");
    //     })

    //     const data = await promise;
    //     console.log(data);
    // }

    // displayMessage();


// 

// async function display() {
//     const promise  = new Promise ((resolve) => {
//         resolve("Hello Digvijay !");
//     });

//     const data  = await promise;
//     console.log(data);
// }
// display();

// 
// async function loader() {
//     const promise  = new Promise ((resolve) => {
//         setTimeout (() => {
//             resolve("User Loaded")
//         },2000)
//     });
//     const data  = await promise;
//     console.log(data);
// }
// loader();


// 

// async function loginUser () {
//     const promise = new Promise ((resolve , reject) => {
//         reject("Invalid Password")
//     });
//     try {
//         const data = await promise
//         console.log(data);
//     } catch(error) {
//         console.log(error);
//     }
//     }
//     loginUser();


  //  multiple await ;
async function loadData (){
    const promise1  =  new Promise ((resolve , reject) => {
        setTimeout (() => {
            resolve("User data")
        },2000);
    });
    const user1 = await promise1;
    console.log(user1);

    const promise2  = new Promise ((resolve) => {
        setTimeout (() => {
            resolve("Order Loaded")
        },1000);
    });
    const user2 = await promise2;
    console.log(user2);
}
loadData();
