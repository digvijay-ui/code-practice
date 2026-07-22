// create a new array containing only students whose age is not equal to 21.


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
    return student.age !== 21;
})

console.log(studentUpdate);