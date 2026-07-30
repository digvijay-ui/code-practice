let a = 10 ;

function outer(){
    let b = 20;

    function inner(){
      console.log(a);
       console.log(b);
    }

    console.log(a)

    inner();
}

outer();




let a = 100 ;

function outer() {
    let b = 200;

    function inner() {
        let c = 300;

        console.log(a);
        console.log(b);
        console.log(c);
    }
    inner();

    console.log(b);
}

outer();

function first() {
    console.log("A");
}
function second() {
    console.log("B");
}
console.log("Start");
first()

console.log("Middle");

second()

console.log("End");


let a = 1;

function outer() {
    let b = 2;

    function inner() {
        let c = 3;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(b);
    inner();    
}
outer();


let a = 10;

function outer() {
    let b = 20;

    console.log("X");

    function inner() {
        console.log(a);
        console.log(b);
    }

    console.log("Y");

    inner();

    console.log("Z");
}

outer();


let a = 5;

function outer() {
    let b = 10;

    console.log("A");

    function inner() {
        console.log(b);
        console.log(a);
    }

    inner();

    console.log("B");
}

outer();