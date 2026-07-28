console.log("A");

setTimeout(() => {
    console.log("B");

    Promise.resolve().then(() => {
        console.log("C");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("D");

    setTimeout(() => {
        console.log("E");
    }, 0);
});

Promise.resolve().then(() => {
    console.log("F");
});

console.log("G");
/* like this kind of snipet are there we need to find out put */
/* first check synchronous code --> microtask queue(web api(promises)) ---> callbackqueue follow this pattern(setTimeout like that) */
/* most important Topic */