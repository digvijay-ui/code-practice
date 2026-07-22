
// create new array containg only student whose name include the letter "a"


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
    return student.name.includes("a");
})

console.log(studentUpdate);


// one more question in which in new array word a will not there 


// const studentUpdate = students.filter((student) =>{
//     return !student.name.includes("a");
// })

// console.log(studentUpdate);