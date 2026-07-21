// count marks of student who failed

const students = [
    {
        name:  "digvijay",
        age: 22,
        marks: 38,
    },{
        name: "sky",
        age: 20,
        marks:78
    }
]

let failedStudent = 0;

students.forEach((student) => {
    if(student.marks < 40){
        failedStudent++
    }
})

console.log(failedStudent);