// Topic - array method and question to give student name and index

const students = [
        {
            name:  "Digvijay",
            age: 22,
            marks: 38,
        },{
            name: "Sky",
            age: 20,
            marks:78
        }
    ]

    students.forEach((student,index) => {
        console.log(index,"-",student.name);
    })