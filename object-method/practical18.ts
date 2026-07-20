// update object inside the array

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

students[2].marks = 99;
 
console.log(students[2].marks);