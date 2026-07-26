
function filterNumber (numbers : number[] , callback : (numbers : number[]) => boolean) : void {
  
     const newArray : number[] = [];

     for (let i = 0; i<numbers.length; i++){
        const result  = callback(numbers[i]);

        if(result){
            newArray.push(numbers[i]);
        }
    
     }
   console.log(newArray)
}

filterNumber([10,15,20,25,30] , function(num : number){
    return num % 2 === 0;
})



function reduceNumbers (
       numbers: number[],
       initialValue : number,
       callback : (accumaltor : number , current : number) => number) : void {
        
        let accumaltor = initialValue;

        for (let i = 0; i<numbers.length; i++){
            accumaltor = callback(accumaltor, numbers[i])
        }
         console.log(accumaltor);
       }

       reduceNumbers ([10,20,30],0, function(acc , current){
        return acc + current;
       })

//  const students = [
//   { name: "Digvijay", marks: 79 },
//   { name: "Virendra", marks: 38 },
//   { name: "Skylar", marks: 90 },
//   { name: "Jay", marks: 55 }
// ];

// function processStudents (students : {
//     name: string,
//     marks: number;
// }[], callback : (name: string , marks : number) => string) : void {
    
//     for (let i = 0; i<students.length; i++){
//         const result = callback(students[i]);
//         console.log(result);
//     }
// }

// processStudents (students, function(student){
//     return student.name;
// })
                       