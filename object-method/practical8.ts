// check whether the property exist 

const student = {
    name: "digivjay",
    age: 21,
    course: "Information Technology",
    email: "rajput@gmail.com",
    city: "Ahmedabad"
}

if("city" in student){
    console.log("city exits")
} else {
    console.log("city does not exits");
}

