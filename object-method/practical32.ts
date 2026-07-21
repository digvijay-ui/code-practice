//

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

students.forEach((student) => {
   if(student.marks >= 40){
    console.log(student.name)
   }
});