// count passed student 

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

let passedCount = 0;
for(let i = 0; i<students.length; i++){
    if(students[i].marks >= 40){
        passedCount++
        
        
    }
}
console.log(passedCount, "passed students")