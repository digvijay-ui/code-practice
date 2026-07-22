// create new array containg only student whoose marks are even number and odd 

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
    return student.marks % 2 === 0;
})

console.log(studentUpdate);

// const studentUpdate = students.filter((student) =>{
//     return student.marks % 2 !== 0;
// })

// console.log(studentUpdate);


