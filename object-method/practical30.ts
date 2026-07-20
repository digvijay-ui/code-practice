// average of marks

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

let totalMarks = 0;

for (let i = 0; i<students.length; i++){
    totalMarks = totalMarks + students[i].marks
}

const average = totalMarks/students.length;

console.log(average);