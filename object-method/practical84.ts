// sort the number in ascending 

// const numbers = [2, 100, 5];

// const sortNumber = numbers.sort((a,b) => {
//     return a- b;
// })

// console.log(sortNumber);

// const numbers = [40, 10, 60, 20, 50];

// const sortNumber = numbers.sort((a,b) => {
//     return b - a;
// })

// console.log(sortNumber);

// const names = ["Skylar", "Digvijay", "Virendra", "Jay"];

// const sortName  = names.sort((a, b)  => {
//     return  a.localeCompare(b);
// })

// console.log(sortName);


// const students = [
//   { name: "Digvijay", age: 20, marks: 79 },
//   { name: "Virendra", age: 21, marks: 38 },
//   { name: "Skylar", age: 22, marks: 90 },
//   { name: "Jay", age: 23, marks: 55 }
// ];

// const studentMarks  =  students.sort(( a, b ) => {
//     return a.marks - b.marks;
// })
// console.log(studentMarks);

const students = [
  { name: "Digvijay", age: 20, marks: 79 },
  { name: "Virendra", age: 21, marks: 38 },
  { name: "Skylar", age: 22, marks: 90 },
  { name: "Jay", age: 23, marks: 55 }
];

// const studentMarks  =  students.sort(( a, b ) => {
//     return  b.marks - a.marks; 
// })
// console.log(studentMarks);

// const studentUpdate = students.sort((a,b) => {
//     return a.name.localeCompare(b.name)
// })

// console.log(studentUpdate);

const studentUpdate  = students.sort((a,b) => {
    return a.age - b.age
}) 
console.log(studentUpdate);