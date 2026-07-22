// create a new array containing only students whose names start with a vowel.
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

const studentUpdate = students.filter((student) => {
    
    const vowel = "aeiou"
    return vowel.includes(student.name[0]);
})

console.log(studentUpdate);