//  Find the first student whose name starts with "S" or "s".


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
    return student.name.startsWith("S") || student.name.startsWith("s");
})

console.log(studentUpdate)