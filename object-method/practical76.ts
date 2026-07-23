// Find the first student whose marks are greater than 80.

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

const studentUpdate = students.find((student) => {
    return student.marks > 80;
})

console.log(studentUpdate);