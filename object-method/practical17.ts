// find the students have greater then 80 marks

const students = [
    {
        name: "Digvijay",
        age : 21,
        marks: 90
    },
    {
         name: "jay",
        age : 21,
        marks: 70
    },
    {
         name: "Digvijay",
        age : 21,
        marks: 60
    }
]

for (let i = 0; i<students.length; i++){
    if(students[i].marks >= 90){
        console.log(students[i].name);
    }
};
