// create a new array containg only students whose name have more than 6 character 


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
    return student.name.length > 6
})
console.log(studentUpdate);
