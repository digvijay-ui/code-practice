// update a nested object value

const student = {
    name: "don",
    age: 90,


    address : {
        city: "ahmedabad",
        state: "garvi gujarat"
    }
};

   student.address.state = "gujarat";

   console.log(student.address.state);