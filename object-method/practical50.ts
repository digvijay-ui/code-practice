// increase there age of student after 1 year using 

const students = [
    {
        name: "Digvijay",
        age : 20,
        marks: 89,
    },{
        name: "Virendra",
        age: 21,
        marks: 38,
    },{
        name: "skylar",
        age: 22,
        marks: 90
    }
]

const updateStudent = students.map((student) => {
     return {
        name : student.name,
        ageAfterOneYear : student.age + 1
     }
})

console.log(updateStudent);