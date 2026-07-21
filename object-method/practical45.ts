// Using the same students array, create a new array where every student’s marks are increased by 5.

const students = [
    {
        name: "Digvijay",
        age : 20,
        marks: 89,
    },{
        name: "Virendra",
        age: 21,
        marks: 78,
    },{
        name: "yash",
        age: 22,
        marks: 90
    }
]

const studentsMarks = students.map((student)  => {
    return student.marks + 5;
})

console.log(studentsMarks);