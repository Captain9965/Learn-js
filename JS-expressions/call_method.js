/*

    allows one to call a function and set the this argument inside the function to the thisArg parameter..

*/
function add(x, y){
    return x + y;
}


//returns 5 because this is set to the global object ie. windown in web browsers and global in Nodejs
//In strict mode, this is set to undefined.
console.log(add.call(this, 2, 3));


let greeting = "Hello";

let message = {
    greeting: "How are you man?"
}

function say(name){
    console.log(this.greeting + ' ' + name);
}

//undefined:
say.call(this, "Jeffery");

//lets add the this argument:
say.call(message, "Jeffery");


/*

    we can use call to chain object constructors and function borrowing..
    Very similar to the apply() function.

*/

