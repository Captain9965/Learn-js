/*

    This is a function that is passed as a parameter to another 
    function and is executed inside the other function

    Used to provide async functinality

*/

const greeting = (Name)=>{
    console.log(Name);
}

const processName = (callback, Name)=>{
    callback(Name);
}

processName(greeting,"Lenny");