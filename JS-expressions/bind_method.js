/*
    
*/


console.log("--------------------------using bind() method--------------------------");
{
    //when one passes an object with a method to another function, the this is lost:
    eg:
    var person = {
        name: 'John Doe',
        getName: function() {
            console.log(this.name);
        }
    };
    /*
    we get undefind here  because this is lost when the object is passed in as an argument.
    the this is set to undefined in non-strict mode and set to the global object in strict mode..
    to remedy this, one can wrap the call to person.getName in an anonymous function...which gets the 
    object person from the outer scope then calls the method getName():
    ie: 
    setTimeout(function () {
    person.getName();
    }, 1000);

    or 
    use the bind method to bind the method to the object in its arguments like so:
    Note that bind() also enables function borrowing -> allowing an object to borrow a method 
    from another object without making a copy of that method..

    */
    setTimeout(person.getName.bind(person), 1000);
}