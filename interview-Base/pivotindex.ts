// equal sides of an array 

export function findEvenIndex(arr: number[]): number {
    for (let i = 0; i<arr.length; i++){
        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j<i; j++){
            leftSum = leftSum + arr[i]
        }

        for (let j = i + 1; j<arr.length; j++){
            rightSum = rightSum + arr[i]
        }

        if (leftSum = rightSum){
            return i
        }
    }
    return -1;
}