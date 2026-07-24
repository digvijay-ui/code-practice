//
// const numbers = [10, 20, 30, 40];

// const  result = numbers.reduce((sum , currentNumber) =>{
//   return sum + currentNumber
// })

// product (multiplication) of all the numbers using reduce().
// const  result = numbers.reduce((sum , num) =>{
//   return sum * num
// })

// Find the total marks of all students using reduce().

const students = [
    {
        name: "Digvijay",
        age : 20,
        marks: 79,
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

const totalMarks = students.reduce((acc,student) => {

  return acc + student.marks;
  
},0)




console.log(totalMarks);

// Find the total age of all students using reduce().

const totalAge = students.reduce((acc, student) => {
  return acc + student.marks ;
},0)

console.log(totalAge);

// Find the highest marks using reduce().

const highestMarks = students.reduce((acc,student)=>{
   if(acc > student.marks){
    return acc;
   } else {
    return student.marks
   }
  
},0)

console.log(highestMarks);

// Find the average marks of all students.

const findAverage = students.reduce((acc,student)  => {
    
})

const averageMarks = students.reduce((acc,student) => {

  return acc + student.marks;
  
},0)

const totalMarks = averageMarks/students.length;

console.log(totalMarks)

const studentPassed = students.reduce((acc, student) => {

    if(student.marks >= 40){
        return acc + 1
    } else {
        return acc
    }
},0);
console.log(studentPassed);