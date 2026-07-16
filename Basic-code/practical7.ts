// login validation 
const username = "rajput";
const password = "1234";

function checkLoginValidation(username: string , password: string){
    if(username === "rajput" && password === "1234"){
        console.log("Login succesfull");
    } else {
        console.log("invalid credentials");
    }
}
checkLoginValidation("rajput","1234");