

function greetUser (name: string ) {
    console.log("hello " + name);    
}

function processUser(callback : (name:string) => void) {
    callback("Digvijay");
}

processUser(greetUser);


function calculate (
    a : number,
    b : number,
    callback : ( x : number , y : number) => void
) {
    callback (a,b)
} 
    calculate (5,10, function ( x : number , y : number){
        console.log(x + y);
    });

    calculate (5,5, function ( x : number , y : number){
        console.log(x * y);
    })
    calculate (5,5, function ( x : number , y : number){
        console.log(x - y);
    })
    calculate (5,5, function ( x : number , y : number){
        console.log(x / y);
    })

// email validation

function validateEmail(email: string): void {
    if ( email.includes("@") &&
         email.includes(".") &&
         !email.startsWith("@")&&
         !email.endsWith("@") &&
         !email.endsWith(".")
        ) {
            console.log("valid email");
        } else {
            console.log("invalid email");
        }
};

validateEmail("digvijay@gmail.com");
validateEmail("rajputdigvijaysinh.com");
 
// email validation with regex

function validateEmailRegex(email: string) : void {
    const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)){
        console.log("valid email")
    } else {
       console.log("Invalid email");
    }
}

validateEmailRegex("rajputdigvijaysinh45@gmail.com")


 