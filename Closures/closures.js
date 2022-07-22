/*
    These are child functions that can access the variables of the parent function
    After the parent function is executed, one can still access its variables through the child function
    as its scope is still kept alive even when the parent function returns

    useful when you want to achieve objected-oriented-like behaviour

*/

const parent = ()=>{
    const greet = "Morning!!";
    const child = ()=>{
        console.log(greet);
    }
    return child
}
const func = parent();
func(); //can still access the variable greet



