/*

    ES6 defines 6 primitive data types:

*/
//1. Numbers:

{
    let num = 20; //Integer
    let num1 = 56.007 //float
    let num2 = Infinity //Infinity
    let num3 = 'not a number' //NaN
    if (isFinite(num)){
        console.log("Finite number");
    }
    if (isNaN(num3)){
        console.log("Not a number");
    }
}

//2. Strings:
{
    let string = "Double quotes";
    let string1 = 'single quotes';
    //backticks enable us to embed a variables inside strings
    let string2 = `One can embed ${string1}`;
    console.log(string2);
}

//3. boolean
{
    let iswrong = false;
    let iswrite = true;
}
//4. null : which does not belong to any of the data types and is a seperate type on its own.
// It basically means 'nothing' or 'empty' or 'value unknown'.
{
    let null_var = null;
    console.log(null_var);
    if (!null_var){
        console.log("Null is a falsely value");
    }

    //is undefined a falsely value?
    let undefined_var;
    if(!undefined_var){
        console.log("undefined vars are falsely");
    }
}

//5. undefined : means value not assigned

/*

    6. Objects:
        They are not primitives at all. Everything in js is an object.
        They store keyed collections of data.

*/
//creating objects:

{
    let obj = new Object;
    //or:
    let obj2 = {};
    console.log(obj);
    obj = {
        Name: "Object", 
        CreatedAt: new Date(),
    };
    console.log(obj);
    //accessing the properties:
    console.log(obj.Name);
    //or you can use the object notation
    console.log(obj['CreatedAt']);
    //adding properties to the object:
    obj.type = "Static";
    console.log(obj.type);
    //deleting an object:
    delete obj.Name;
    //is now undefined:
    console.log(obj.Name);
}

