//used to manipulate certain values or operands:
// 1. Arithmetic operators include +, -, %, --, ++, +=, -=, *=, /= , %=

let sum = "One " + "can "+ "add "+ "string "+ "literals";
console.log(sum);

//2. comparison operators:
// ==, !=, <, >,<=, >=, === ( only returns true when the operands are equal in both type and value)

let number1 = 10;
let number2 = "10";
if (number1 == number2){
    console.log("The 2 variables are equal");
}
if (number1 === number2){
    console.log("The 2 variables ar equal");
} else{
    console.log("the 2 variables are of different types")
}

//3. typeof operator: returns the datatype of its operand..
console.log( `The var number2 is of type ${typeof(number2)}`);
//Note: {}, [], true and non-empty strings are all truthly 

/*4. Logical operators:
    !(not),
    &&(and):
        And is evaluated from left to right, it first converts
        each operand to boolean and if the result is false, it stops
        and returns the original value of that operand. Otherwise, if 
        all were truthly, it returns the last truthly value.
*/
console.log(1 && null);
console.log(1 && 2 && 3);

/*
    || first converts all operands to boolean and then if the 
    result is true, stops and returns the original value of that operand.
    Otherwise, if all values are falsely, it returns the last value.

*/
console.log(3 || 4);
console.log(6 || null || 5);
console.log( 0 || undefined  || null);