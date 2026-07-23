

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


/*  check whether every student has marks greater than or equal to 35. */
// const studentUpdate = students.every((student) => {
//     return student.marks >= 35;
// })

// console.log(studentUpdate);


// const studentUpdate = students.every((student) => {
//     return student.marks >= 35;
// })

// console.log(studentUpdate);

/* every student is older than 20 years. */

// const studentUpdate = students.every((student) => {
//     return student.age > 20;
// })

// console.log(studentUpdate);

// every student has marks greater than 50.
// const studentUpdate = students.every((student) => {
//     return student.marks > 50;
// })

// console.log(studentUpdate);

//every student's name has at least 5 characters.

// const studentUpdate = students.every((student) => {
//     return student.name.length > 5;
// })

// console.log(studentUpdate);

// every student's name contains the letter "a".
const studentUpdate = students.every((student) => {
    return student.name.includes("a");
})

console.log(studentUpdate);



