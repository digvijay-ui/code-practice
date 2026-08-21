// encoding 
  const BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
export function toBase64(data: Uint8Array): string {


  let result = "";
  for(let i = 0; i<data.length; i += 3){
    const byte1 = data[i]
    const byte2  = i + 1 < data.length ? data[i + 1] : 0;
    const byte3 =  i + 2 < data.length ? data[i + 2] : 0;

    const combine = (byte1 << 16) | (byte2 << 8) | byte3;

    const index1 = (combine >> 18) & 63;
    const index2 = (combine >> 12) & 63;
    const index3 = (combine >> 6 ) & 63;
    const index4 = combine & 63

    result = result + BASE64[index1];
    result = result + BASE64[index2];

    if(i + 1 < data.length){
        result = result + BASE64[index3];
    }
    if(i + 2 < data.length){
        result = result + BASE64[index4]
    }
  } 
return result
}

// decode 

export function fromBase64(encoded: string): Uint8Array {

  const result : number[] = []

  for (let i = 0; i<encoded.length; i += 4){
    const index1 = BASE64.indexOf(encoded[i]);
    const index2 = BASE64.indexOf(encoded[i + 1]);

    const index3 = i + 2  < encoded.length ? BASE64.indexOf(encoded[i + 2]) : 0;
    const index4 = i + 3  < encoded.length ? BASE64.indexOf(encoded[i + 3]) : 0;

    const combine = ( index1 << 18) |(index2 << 12) | (index3 << 6) | index4;

    const byte1 = (combine >> 16) & 255;
    const byte2 = (combine >> 8) & 255;
    const byte3 = combine & 255 ;

    result.push(byte1);

    if(i + 2 < encoded.length) {
      result.push(byte2);
    }
    if(i + 3 < encoded.length) {
      result.push(byte3);
    }
  }
  return new Uint8Array(result);
}
