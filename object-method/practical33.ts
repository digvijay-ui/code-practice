// total marks 

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

let totalMarks = 0;

students.forEach((student) => {
    totalMarks = totalMarks + student.marks  
})

 console.log(totalMarks);