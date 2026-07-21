// check the highest nad lowest marks 


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

    // let highestMarks = students[0]

    // students.forEach((student)  => {
    //     if (student.marks >= highestMarks.marks){
    //         highestMarks = student
    //     }
    // })

    // console.log(highestMarks);


    let lowestMarks = students[0];

    students.forEach((student)  => {
        if(student.marks <  lowestMarks.marks){
            lowestMarks = student
        }
    })

    console.log(lowestMarks)