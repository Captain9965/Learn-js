var _name;
/*
 The value of _name is undefined at this point:
*/
console.log(_name);
if (_name == undefined){
    console.log("The variable is undefined");
}
/* 
    It is important to note that javascript is an 
    untyped language. this means that once a variable is declared, 
    it can be assigned any value to it.
*/
_name = "Javascript";
console.log(_name);
/* Change type: */
_name = 857;
console.log(_name);

/*
    ES2015 provides us with 2 other variable conatiners namely let and const
    let has scope constraints while const is assigned to a data whose value 
    cannot be changed throughtout the script:
*/
{
    let car = "Toyota"
    console.log("We can access the let varible here-> "+ car);
}
// we cannot access car here:
// console.log(car);

const PIE = 3.142;
//This will raise an error:
// PIE = 3.1
console.log(PIE);
