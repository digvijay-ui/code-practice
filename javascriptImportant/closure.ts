Q1

function outer() {
    let count = 1;

      return function () {
        count++;
        console.log(count)
      };
}

const fn = outer();
fn();
fn();


q2

function outer() {
    let value = 10; 

     return {
        add : function() {
            value += 5 
        },
        show : function() {
            console.log(value);
        }
     };
}

const obj  = outer();
obj.add();
obj.show();

q 3 

function outer() {
    let count = 0;

      return function () {
        count +=2 ;
        return count
      };
}

const a = outer();
const b = outer();

console.log(a());
console.log(b());
console.log(a());

q 4

function outer() {
    let num = 5;

    return {
        multiply: function () {
            num *= 2;
        },

        show: function () {
            console.log(num);
        }
    };
}

const obj = outer();

obj.multiply();
obj.multiply();

obj.show();

q5

function outer() {
    let score = 100;

    return {
        increase: function () {
            score += 10;
        },

        decrease: function () {
            score -= 20;
        },

        show: function () {
            console.log(score);
        }
    };
}

const obj = outer();

obj.increase();
obj.decrease();
obj.increase();

obj.show();