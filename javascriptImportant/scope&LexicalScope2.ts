practice 1
let a = 1;

function outer() {
    let b = 2 

    console.log(b);

    function inner() {
        console.log(a);
    }

    console.log("X");

    inner();
}
outer();


practice 2 

let x = 100;

function outside () {
    let y = 200;

    function inside () {
        console.log("Ineer");
        console.log(x);
    }
    console.log("outer");

    inside();

    console.log(y);
}

outside();

 practice 3 

let a =  10;

function outer() {
    let b = 20;

    console.log(a);

    function inner () {
        console.log("hello");
        console.log(b);
    }
    inner()
    console.log("Bye");
}
outer();


practice 4 

let a = 1;

function outer() {
    let b = 2;

    console.log("start");

    function inner() {
        let c = 3;

        console.log(c);
        console.log(b);
        console.log(a);
    }
    inner();

    console.log("End");
}

outer();

practice 5 

let a = 10;

function outer() {
    let a = 20; 

    function inner() {
        console.log(a)  ;
    }
    inner();
}

outer();

practice 6

let x = 1;

function outer () {
let x = 2;
  
 function inner() {
    console.log(x);
 }
 inner();
}

outer();


