
// find student by name

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



for(let i = 0; i<students.length; i++){
    if(students[i].name === "jay"){
    console.log(students[i])
    break;
    }
}