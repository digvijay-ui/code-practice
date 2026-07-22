// create new array containg only student whose marks are greater than the average marks 

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

let totalMarks = 0;

students.forEach((student)  => {
    totalMarks = totalMarks + student.marks
})

const average = totalMarks/students.length;

const studentUpdate = students.filter((student)  => {
    return student.marks > average;

})
console.log(studentUpdate);