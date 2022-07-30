/*
    this in javascript is often misunderstood because it is treated differently compared to 
    in java or to self in python.


    Functions in javascript are objects and as such can be assigned to variables, 
    returned from functions and as such, they have their own properties, one of which is this..

    The value that this stores is the current execution context of the javascript program.
    A line of code outside of a funtion is said to belong to the global context.and the value of this in the global context 
    is the same as the global object.
    In a browser, this is the window object..
*/
console.log(this) //this global invocation

//this in function invocation:

function logThis(){
    console.log(this);
}

//this inside the function has the value of the global object, 
//which is the window enviroment in the browser environment.
logThis();

/*

    Note that in method invocation, this will contain the value of the calling object..
    Let us look now at the value of this inside a nested function:

*/

console.log("----------------------this from a nested function----------------------------------");

let add = {
    num : 0,
    calc : function(){
        //log the this object:
        console.log(`This from the outer function -> ${this}`);
        thisreference = this;
        function innerFunc(){
            thisreference.num +=1;
            console.log(`This from the inner function -> ${this}`);
            //this.num
            //will return NaN because innerFunc is called by normal function invocation and hence
            //value of this is set to the global object.
            //we dan remmedy this by assigning a reference of this to a variable that can be passed to the inner function:
            //eg. thisreference = this.
            return thisreference.num;
        }
        return innerFunc();
    }

};

console.log(add.calc());

console.log("---------------------------this in constructor invocation:--------------------------");
{
    let people = function(name, age) {

        //notice that this is set to the newly created object instance..
        console.log(this);
        this.name = name;
        this.age = age;
 
        this.displayInfo = function() {
        console.log(this.name + " is " + this.age + " years old");
     }
   }

   person1 = new people("Lesley", 79);

}

