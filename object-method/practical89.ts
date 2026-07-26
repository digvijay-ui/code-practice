// 

 const students = [
  { name: "Digvijay", marks: 79 },
  { name: "Virendra", marks: 38 },
  { name: "Skylar", marks: 90 },
  { name: "Jay", marks: 55 }
];

function processStudents (students : {
    name: string,
    marks: number,
}[], callback:( name : string , marks : string) => string) : void {
    
    for(let i = 0; i<students.length; i++){
        const result = callback(students[i])
        console.log(result);
    }
}

processStudents (students , function(student){
    return student.name + ":" + student.marks
})


