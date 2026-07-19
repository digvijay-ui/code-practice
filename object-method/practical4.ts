// delelte propety

const student: {
    name: string;
    city: string;
    age: number;
    course: string;
    email?: string
} = {
    name : "digvijay",
    age: 21,
    course : "information Technology",
    city: "Ahmedabad",
    email: "rajput@gmail.com"


}
delete student.email;
console.log(student);
