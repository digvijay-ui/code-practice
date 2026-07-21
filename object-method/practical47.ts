// Using the same students array, create a new array containing objects with only:


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

const studentDetail = students.map((student)  => {
    return {
        name : student.name,
        marks : student.marks,
    }
})

console.log(studentDetail);