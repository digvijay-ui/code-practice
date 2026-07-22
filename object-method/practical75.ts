// create a new array containing only students whose names end with a consonant.

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
    const vowel  = "aeiou";

    const lastcharacter = student.name[student.name.length -1]

    return ! vowel.includes(lastcharacter)
})
console.log(studentUpdate);