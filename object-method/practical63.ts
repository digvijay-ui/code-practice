// create a new array containing only students whose marks are greater than 50 and whose name length is more than 6 characters.

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
    return student.marks >=50 && student.name.length > 6;
})

console.log(studentUpdate);

