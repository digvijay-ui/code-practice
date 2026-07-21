// Create a new array containing sentences like: ---> digvijay scored 67 marks
// * $ is used with {} inside a template literal to insert a variable value into a string. * //


const students = [
    {
        name: "Digvijay",
        age : 20,
        marks: 89,
    },{
        name: "Virendra",
        age: 21,
        marks: 78,
    },{
        name: "yash",
        age: 22,
        marks: 90
    }
]

const studentReport = students.map((student)   => {
   // return student.name + " scored " + student.marks + " marks "

   return `${student.name} scored ${student.marks} marks`;
})

 console.log(studentReport);

 
