export function isValidIp(str : string): boolean{
  const part = str.split(".")
  if(part.length !== 4){
    return  false;
  }

  for(let i = 0; i<part.length; i++){
    const current = part[i];
    
    // check empty 
    if(current === ""){
        return false
    }
     
   // leading 0

    if (current.length < 1 && current[0] === "0"){
        return false
    }
    
    // check digit 

    if(!/^\d+$/.test(current)){
        return false;
    }

    const num = Number(current);
    if(num < 0 || num > 255){
        return false
    }
    
  }
  return true
}