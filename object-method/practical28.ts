// update student by name { in that update there marks }

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



for (let i = 0; i<students.length; i++){
  if(students[i].name === "jay"){
    students[i].marks = 85;
    break;
  }
}
console.log(students)

