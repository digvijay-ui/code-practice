
// create object method

const student = {
    name : "digvijay",
    age : 22,

    introduce() {
        console.log("My name is " + this.name);
    }

};
student.introduce();