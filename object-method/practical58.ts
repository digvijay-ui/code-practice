// create new array containg only student whose age >= 21 and marks >= 50

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
    return student.age >= 21 && student.marks >= 50;
})

console.log(studentUpdate);
