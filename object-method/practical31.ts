// First question: forEach()
// Print every student’s name from the students array using forEach().

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


students.forEach((student) =>{
    console.log(student.name)
});

