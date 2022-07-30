/*
    *yield expressions are used when one wants to delegate to some iteratabel object:

*/

function* function1(){
    yield 1 + 1;
    yield 5 + 6;
    yield* function2();
}

function* function2(){
    yield 7 + 90;

}

const yieldFunction = function1();
console.log(yieldFunction.next());
console.log(yieldFunction.next());
console.log(yieldFunction.next());

//returns undefined:
console.log(yieldFunction.next());