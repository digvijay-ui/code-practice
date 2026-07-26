// 

function processUser (name : string, callback : (name : string ) => string): void {
    
    callback(name);
}

processUser ("Digvijay", function(name : string ){
        console.log("Hello " +  name)
});

// calculate  

function calculate ( 
     a : number ,
     b : number , 
     callback : ( x : number , y : number) => number) : void{
        const result = callback(a,b);
        console.log(result);
     }

     calculate (10,20, function(x : number , y : number){
        return (x + y)
     })

// create ney array 

function processNumbers (
    numbers : number[],
    callback : (numbers : number) => number) : void {

        const newArray : number[] = [];
        for (let i = 0; i<numbers.length; i++){
            const result = callback(numbers[i])
            newArray.push(result);
        }
        console.log(newArray);
    }

    processNumbers ([1,2,3,4,5], function(num : number){
        return num * 2
    })

    // Implement filter() Internally

function filterNumbers (
    numbers : number[],
    callback : (numbers : number) => boolean) : void {
        
        const newArray : number[] = [];

        for (let i = 0; i<numbers.length; i++){
            const result = callback(numbers[i])

            if(result){
                newArray.push(numbers[i])
            }

        }

        console.log(newArray);
    }

    filterNumbers ([10,20,30,40,50] , function(num : number){
        return num > 18;
    });

    // Implement reduce() Internally

    function reduceNumbers (
        numbers : number[],
        initialValue : number,
        callback : (accumulator : number , current : number) => number) : void {

            let accumulator = initialValue;

            for (let i = 0; i<numbers.length; i++){
                accumulator = callback(accumulator , numbers[i])
            }
            console.log(accumulator);
        }

     reduceNumbers ([10,20,30] ,0, function(acc, current){
        return acc + current;
     })   

     //     call back revison 

     const students = [
        { name: "Digvijay", marks: 79 },
        { name: "Virendra", marks: 38 },
        { name: "Skylar", marks: 90 },
        { name: "Jay", marks: 55 }
     ];

     function processStudents ( students : {
        name : string,
        marks : number,
      }[], callback : (name : string , marks : string) => string ) : void {
     
         for (let i = 0; i<students.length; i++){
            const result = callback(students[i])
            console.log(result);
         }

      }

      processNumbers (students , function(student){
        return student.name + ":" + student.marks
      });

