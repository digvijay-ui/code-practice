// create parameter with new marks

    const student = {
        name: "digvijay",
        marks: 78,


        updateMarks(newMarks : number){
            this.marks = newMarks;

        }
    }

    student.updateMarks(90);
    console.log(student.marks);