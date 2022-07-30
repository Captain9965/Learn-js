/*
    Two types of programming in general:
    1. Imperative:
        our code tells the compiler and users about how to do a task 

*/

const arr = [1, 2, "3","4","5","6",7,8];

function even(element){
    return element % 2 === 0;
}

//converting string to number in array:
const arrayAsNumbers = arr.map((element)=>{
    return Number(element);
});

//filtering the even numbers:

const filterNumbers = arrayAsNumbers.filter((element)=>{
    return even(element);
})

console.log(filterNumbers);

/*
    In declarative programming, the code tells the compiler and users what to do:
    1. Declarative code is more readable than imperative.
    2. Less buggy code.
    3. Tesing is made easier as we are using pure functions
    4. Easier to maintain because we are playing with pure functions that are tried and tested

*/
const declarativeFilteredArr = arr.filter(even,arr.map(Number,arr));
console.log(declarativeFilteredArr);
