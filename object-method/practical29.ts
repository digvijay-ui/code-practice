// remove the studnt by name 

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
  if(students[i].name === "banko"){
    students.splice(i,1);
    break;
}
}
console.log(students);

