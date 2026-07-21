//  create new array and return there name


const students = [
        {
            name:  "digvijay",
            age: 22,
            marks: 38,
        },{
            name: "sky",
            age: 20,
            marks:78
        }
    ]
const studentNames =  students.map((student) => {
    return student.name;
})

console.log(studentNames);