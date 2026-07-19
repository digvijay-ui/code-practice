// Loop through an object

 const student = {
        name: "Digvijay",
        age: 21,
        course: "Information Technology",
        email: "rajputdigvijay45@gmail.com"
    }

    for( const key in student){
        console.log(key,student[key as keyof typeof student]);
    }
    
    