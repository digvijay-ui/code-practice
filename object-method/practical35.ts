// 


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
    student.marks = student.marks + 5;
    console.log(student.name, "-->", student.marks);
})