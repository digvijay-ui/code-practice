    // practice 
    const students = [
        {
            name: "Digvijay",
            age : 20,
            marks: 89,
        },{
            name: "Virendra",
            age: 21,
            marks: 38,
        },{
            name: "yash",
            age: 22,
            marks: 90
        }
    ]

    const updateMarks = students.map((student) => {
        
        return {
            name: student.name,
            updateMarks : student.marks + 10,
        }

    })

    console.log(updateMarks);