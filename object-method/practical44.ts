// we need to create new array and print the marks of student using the map()

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

const studentMarks = students.map((student) =>{
      return student.marks 
})

console.log(studentMarks);