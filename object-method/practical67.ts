// create a new array containing only students whose names contain the letter "i" and whose age is less than 22.

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
const studentUpdate = students.filter((student) =>{
    return student.name.includes("i") && student.age < 22;
})

console.log(studentUpdate);