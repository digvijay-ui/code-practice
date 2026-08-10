// check ip address

export function isValidIP(str: string): boolean {
    const part = str.split(".")

    if (part.length !== 4){
        return false;
    }

    for(let i = 0; i<part.length; i++){
        const current = part[i];

        // check empty

        if (current === ""){
            return false;
        }

        // check leading zero 
      if(current.length < 1 && current[0] === "0"){
        return false 
      }
      // check only digit
      if(!/^\d+$/.test(current)) {
        return false
      }

      const num = Number(current);

      // check range
      if( num < 0 || num > 255){
        return false
      }
    }

    return true;
}

console.log(isValidIP("192.168.1.100"));