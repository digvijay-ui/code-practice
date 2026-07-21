//  check student whose marks are greater then 50 then print thr count 


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

    let count = 0;

    students.forEach((student) => {
        if(student.marks > 50){
            count++
        }
    })
    console.log(count);