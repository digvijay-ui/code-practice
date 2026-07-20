    // find the highest-marks in student


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

let highestStudent = students[0];

for (let i = 0; i<students.length; i++){
    if(students[i].marks > highestStudent.marks){

        highestStudent = students[i];
    }
}

console.log(highestStudent);