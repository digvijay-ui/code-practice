// direction reduction

export function dirReduc(arr : string[]) : string[]{
    let reuslt : string[] = [];

    for (let i = 0; i<arr.length; i++){
        let current = arr[i];
        let last = reuslt[reuslt.length - 1];

        if(
            (last === "SOUTH" && current === "NORTH") ||
            (last === "NORTH" && current === "SOUTH") ||
            (last === "WEST"  && current === "EAST") ||
            (last === "EAST" && current === "WEST")
         ) {
            reuslt.pop();
         } else {
            reuslt.push(current);
         }
    } 
    return reuslt;
}
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST", "EAST", "SOUTH"]))