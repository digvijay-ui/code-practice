// create new array using map in that we need to show the student is passed of fail 

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

const checkResult = students.map((student) => {

    let status = ""
    if (student.marks >= 40){
        status = "Passed"
    } else  {
        status = "Failed"
    } 
        return {
            name : student.name,
            status : status,
        }

    }
)

console .log(checkResult);