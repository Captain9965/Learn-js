/*

    in js, one can call a function even before it is defined. This is because the js interpreter moves all 
    the function and variable definitions at the top of the current scope before execution.

*/

printString("This is an example of javascript hoisting");

function printString(string){
    console.log(string);
}
a = 10;
console.log(a);
var a;