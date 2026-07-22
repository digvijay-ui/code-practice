//create a new array containing only students whose marks are either below 40 or above 80.

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
    return student.marks < 40 || student.marks > 80;
})

console.log(studentUpdate);