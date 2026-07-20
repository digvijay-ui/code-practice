// check wheather any student failed 

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

let hasFailedStudent = false;

for (let i = 0; i<students.length; i++){
    if(students[i].marks < 40){
        hasFailedStudent = true;
        break;
    }
}

console.log(hasFailedStudent);
