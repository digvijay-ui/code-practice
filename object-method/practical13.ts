// method with return value

const student = {
    name: "digvijay",
    marks: 89,

    isPassed(){
        return this.marks >= 40;
    }
};
console.log(student.isPassed());
