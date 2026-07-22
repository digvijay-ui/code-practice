// create a new array containing only students whose names start with "D" and whose marks are greater than 70.

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

const studentUpdate = students.filter((student) => {
    return student.name.startsWith("D") && student.marks > 70;
})

console.log(studentUpdate);