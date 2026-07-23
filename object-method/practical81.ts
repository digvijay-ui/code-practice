// Check whether at least one student has marks below 40


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

const studentUpdate = students.some((student)  => {
    return student.marks < 40
})

console.log(studentUpdate)  

// Check whether at least one student has age greater than 21.

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

const studentUpdate = students.some((student)  => {
    return student.age > 21;
});
console.log(studentUpdate);


//Check whether at least one student has marks greater than 85.

const studentUpdate = students.some((student)  => {
    return student.marks > 85;
});
console.log(studentUpdate)


//Check whether at least one student’s name starts with "V".

const studentUpdate = students.some((student)  => {
    return student.name.startsWith("V");
});
console.log(studentUpdate)

//Check whether at least one student has marks exactly equal to 100

const studentUpdate = students.some((student)  => {
    return student.marks === 100;
});
console.log(studentUpdate)