// print there name and age whose age are more then 21


 const students = [
        {
            name:  "digvijay",
            age: 22,
            marks: 38,
        },{
            name: "sky",
            age: 20,
            marks:78
        }
    ]

    students.forEach((student) => {
        if (student.age >= 21){
            console.log(student.name, "-", student.age)
        }});