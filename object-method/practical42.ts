// Using the same students array, create a new array called passedStudents and add the full student objects whose marks are 40 or more.

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

    let passedStudents : typeof students = [];

    students.forEach((student) => {
        if(student.marks >= 50){
            passedStudents.push(student)
        }
    })
console.log(passedStudents);