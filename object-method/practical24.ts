// add student at beginning

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
         name: "banko",
        age : 21,
        marks: 60
    }
]

students.unshift({
        name: "sanyaa",
        age : 21,
        marks: 88
});

console.log(students);
