// playing with digits

export class G964 {

    public static digPow = (n: number, p: number) => {
     
        const digits = n.toString();
        let sum = 0

        for(let i = 0; i<digits.length; i++){
            sum = sum + Number(digits[i]) ** (p + i)
        }
        if(sum % n === 0){
          return sum/n
        }
        return - 1
    }

}

