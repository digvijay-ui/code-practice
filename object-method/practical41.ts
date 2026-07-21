// create new array and push the students name inside that array
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


let studentNames : string[] = [];

students.forEach((student)  => {
    studentNames.push(student.name)
})
console.log(studentNames);