/*
    This is used to resolve 'callback hell', where we have callbacks within
    callbacks within callbacks..
    Promises are used when we want to do asynchronous javascrpt operations where we want to 
    execute 2 or more back to back operations(callback chaining). This is when one functions starts when the 
    previous function completes.

    A promise is an object that may produce a single value sometime in the future, either a resolved value, 
    or a reason that it is not resolved(rejected) 

    A promise can be either in fulfilled, rejected or pending state

*/

const promise = new Promise((resolve, reject)=>{

    if(isResolved){
        resolve("The Promise is resloved");
    } else{
        reject("The promise is rejected");
    }
});

promise.then((result) =>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});