// Find the first student whose marks are below 50 and whose age is 21 or more.


const students = [
    {
        name: "Digvijay",
        age : 20,
        marks: 79,
    },{
        name: "Virendra",
        age: 21,
        marks: 38,
    },{
        name: "skylar",
        age: 22,
        marks: 90
    }
]

const studentUpdate = students.find((student)  => {
    return student.marks < 50 && student.age >= 21
})

console.log(studentUpdate)