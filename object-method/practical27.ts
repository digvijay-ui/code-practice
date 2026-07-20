// find the lowest-marks in student

const students = [
    {
        name: "Digvijay",
        age : 21,
        marks: 90
    },
    {
         name: "jay",
        age : 21,
        marks: 30
    },
    {
         name: "banko",
        age : 21,
        marks: 60
    }
]

let lowestStudent = students[0];

for (let i = 0; i<students.length; i++){
    if(students[i].marks < lowestStudent.marks){
        lowestStudent = students[i]
    }
}

console.log(lowestStudent);