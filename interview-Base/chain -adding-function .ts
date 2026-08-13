// 

export default function add(x : number) : any {
    let sum  =  x


    function next(y:number) : any {
        sum = sum + y
        return next
    }

    next.valueOf = function() {
    return sum ;
    }

    next.stringOf = function () {
        return String(sum)
    }

    return sum
}