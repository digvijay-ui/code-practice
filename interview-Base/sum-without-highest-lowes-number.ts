export function sumArray(array : number[] | null) : number {
    if (array === null || array.length <= 2){
        return 0;
    }

    

    let sum = 0;
    let largest = array[0];
    let smallest = array[0];

    for (let i = 0; i < array.length; i++){
        sum = sum + array[i]

       if(array[i] > largest){
        largest = array[i]
       } 
       if(array[i] < smallest){
        smallest = array[i]
       }
    }
    return sum - largest - smallest
}