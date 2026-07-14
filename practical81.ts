const sentences = "I am learning Javascript";

let addHyphen = ""
for(let i = 0; i<sentences.length; i++){
    if (sentences[i] === " "){
     addHyphen = addHyphen + "-"

    } else {
        addHyphen = addHyphen + sentences[i]
    }
}

console.log(addHyphen);

add hyphen between sentences 

