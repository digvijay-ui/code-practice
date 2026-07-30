// // function validation without  regex

// function validateEmail(email : string) : boolean {
//   let atCount = 0;
//   let dotIndex = -1;
//   let atIndex = -1;



//   const beforeAt =  "abcdefghitjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._+%-";
//   const afterAt = "abcdefghitjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._+%-";

//   for (let i = 0; i<email.length; i++){
//     const ch = email[i];
     
//     if(ch === "@"){
//         atCount++
//         atIndex = i;
//     }
//     if (ch === "."){
//         dotIndex = i
//     }

//     if(atIndex === -1){
//         if(!beforeAt.includes(ch) && ch !=="@"){
//             return false;
//         }
//     } else {
//         if(!afterAt.includes(ch) && ch !=="@"){
//             return false;
//         }
//     }

//   }
//   // @ contain only one
//   if(atCount !== 1){
//     return false
//   }

//   // .must be after the @
//   if(dotIndex < atIndex + 2){
//     return false
//   }

//   // @ cannot be first or last 

//   if (atIndex === 0 || atIndex === email.length - 1){
//     return false 
//   }

//   // atleat 2 character after last .

//   if (email.length - dotIndex - 1 < 2){
//     return false
//   }

//   return true
// }
// console.log(validateEmail("rajputdigvijay56@gmail.com"));


