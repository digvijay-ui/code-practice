function checkAdminDashboard(username : string , password : string, role : string){
    if (username === "rajput" && password === "1234" && role === "admin"){
        console.log("Admin dashboard");
    } else {
        console.log("User dashboard");
    }
}

checkAdminDashboard("rajput","1234","admin");