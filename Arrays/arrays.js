/*
    In js, this is a single variable that stores multiple elements, unlike other languages
    where this is a reference to multiple variables.
*/

//array.concat() method. Note that it doesnt alter the original arrays

var arr1 = [1, 2, 3],
    arr2 = [4, 5, 6]

const arr3 = arr1.concat(arr2);
console.log(arr3);

/*
     
 The method copyWithin() copies part of an array to the same array itself and returns it, without modifying its size
 but yet modifies data whatever user wishes to have in the other's place ie.
    array.copyWithin(target, start, end)
*/

arr3.copyWithin(3,1,3);
console.log(arr3);

/*
    array.entries() is works on iteratable objects such as arrays and is used to fetch all entries of the same 
    data structure. 
    used to get a new array containing key value pairs for each index of an array

*/

const namesArray = ["Lenny", "Cephas", "Daniel", "Junior"];
var kv = namesArray.entries();

for (let [x, y] of kv){
    console.log(`${x}, ${y}`);
}

//one can use an iterator instead:
let iterator = namesArray.entries();

console.log(iterator.next().value);

/*
    array.every():
    used to check whether all elements of the array meet the specified condition. If so, it returns true...and if not
    it returns false.
*/

//check whether all the elements in the array are even:
{
    let arr = [1, 2, 3, 4,5, 6];
    function isEven(element){
        return element % 2 === 0;
    }
    console.log("----------------------------using every()----------------------");
    console.log(arr.every(isEven));

    //lets check whether an array is a subset of another: 
    arr2 = [1, 2, 3];

    function isSubSet(arr1, arr2){
        return arr2.every((element)=>arr1.includes(element))}
    console.log(isSubSet(arr, arr2));

}

/*
    aray.fill(value, start, index):
    used to fill an array with a single digit..
*/
{
    console.log("-----------------------using fill() method------------------------");
    let arr = [1, 2, 3, 4, 5, 6];
    arr.fill(7,0,3);
    console.log(arr);

}

/*
    using arr.filter():
    returns a new array given the set condition is met

*/

{

    console.log("---------------------------using arr.filter()-----------------------");
    let arr = [34, 56, 78, 12, 13];
    //include only numbers that are greater than 20: 
    console.log(arr.filter((element=>element > 20)));
}

/*
    array.find():
    used to return the first element that satisfies a given condition else undefined
*/

{

    console.log("---------------------------using arr.find()-----------------------");
    let arr = [34, 56, 78, 12, 13];
    //find the first number greater than 20:
    console.log(arr.find((element=>element > 20)));
}

/*

    array.findIdex():
    returns the index of the first element that satisfied the provided testing function:

*/

{
    console.log("-------------------------------using arr.findIndex()-----------------");
    let arr = [45, 46, 78, 90];
    console.log(arr.findIndex((element)=>element === 45));

}

/*
    array.flat(n):
    removes array nesting according to depth levels specified by n
*/

{
    console.log("-----------------------------using arr.flat()-------------------------")
    let arr = [1, [2, 3], [[]], 
    [4, [5]], 6];
    console.log(arr.flat(1));
    console.log(arr.flat(2));
}

/*
    arr.flatMap():
    used to flatten the input array element into an new array.
    It returns a new array whose elements are the return value of the callback function
*/
console.log("-----------------------------using flatMap() method----------------------");
{
    let arr = [1, 2, 3 ,4, 5, 6, 7, 8, 9];
    //mapping:
    let mappedArr = arr.map((element)=>[element * 3]);
    console.log(mappedArr);
    //mapping and flatting...the default depth is 1:
    let flatMapArr = arr.flatMap((element)=>[element * 3]);
    console.log(flatMapArr);
}

/*

    arr.forEach():
    calls the predicate functions once for each element in the array..
    it however returns undefined..
*/

console.log("------------------------------using forEach() method:---------------------")
{
    let arr = [3, 4, 5, 6, 7, 8, 9]
    let arr2 = [];
    arr.forEach((element)=>
    {
        arr2.push(element);
    })
    console.log(arr2)
}

/*
    arr.from():
    returns an array object from any object with a length property or an iteratable object
*/

console.log("----------------------------------using arr.from() -------------------------");
let country = "Kenya";
let arr = Array.from(country);
console.log(arr);

/*

    array.includes(searchElement, startIndex):
    used to find out whether an element is part of an array. 
    returns true or false
*/
console.log("--------------------------------using arr.includes()-----------------------");
{
    let arr = [5, 6, 7, 8, 7, 8, 10];
    //returns true
    console.log(arr.includes(6,0));
}

/*
    arr.indexOf(element, start):
    finds the index of the first occurence of the element
    returns -1 if it cannot be found
*/

/*
    Array.isArray(array):
    returns true if the object passed to it is an array or not
*/

/*
    array.join(seperator):
    used to join the elements of an array into a string.
    The default seperator is the comma..

*/
console.log("---------------------- using arr.join()----------------------------------------");
{
    let arr = ["Lenny", "Weda","Orengo"];
    console.log(arr.join(" "))
}

/*
    array.keys():
    used to return a new array iterator which contains the keys for each index
    in the given input array..

*/
console.log("------------------------using arr.keys()------------------------------------------");
{
    let arr = [1, 2, 4, 56, 67, 7];
    let iter = arr.keys();
    for (let keys of iter){
        console.log(arr[keys]);
    }
}

/*

    arr.lastIndexOf(element, start):
    used to return the index of the last occurence of the search element:
    returns -1 if not found..
*/
console.log("---------------------using arr.lastIndexOf()--------------------------------------");
{
    let arr = [5, 6, 7, 8, 6];
    console.log(arr.lastIndexOf(6));
}

/*

    arr.map(callback(element, index, arr), thisArg):
    it returns a new array with the results of a called function on each of the array elements:

*/

console.log("-------------------------using arr.map()-------------------------------------------");
{
    arr = [1, 2, 3, 4, 5, 6];
    let mappedArr = arr.map((element)=>element * 2);
    console.log(mappedArr);

    //square root:
    let sqrt = arr.map(Math.sqrt);
    console.log(sqrt);
}

/*

    polyfills:
    These are functions that are used instead of any function that is not supported by old browsers
    Example: the map polyfill:

*/

console.log("------------------------polyfills--------------------------------------------");

{
    if (!Array.prototype.mymap){
        Array.prototype.mymap = function(callback){
            let newArr = [];
            for (let element of this){
                newArr.push(callback(element));
            }
            return newArr;
        }
    }

    arr = [2, 3, 4, 5, 6];
    console.log(arr.mymap(Math.sqrt));
}

/*

    array.of(element1, element2);
    Creates an new array instance from the elements provided as arguments.
    not supported in all browsers and therefore one can use a polyfill..
    ie.
    newArr.push(arguments[items]); -> inside a for...in loop

*/

/*

    arr.pop():
    removes the last element and returns its value. Note that it returns undefined if 
    the array is empty.
*/
console.log("--------------------------arr.pop()--------------------------------------------------");
{
    arr = [3, 5, 5];
    console.log(arr.pop());
}

/*

    arr.push():
    adds the elements into the array and returns the new length of the array:

*/
console.log("-------------------------arr.push()----------------------------");
{
    let arr = [3, 4, 5, 7];
    console.log(arr.push(7, 8, 90));
}

/*

    array.reduce():
    used to reduce the array to a single value and executes a provided function for each of the value of the array
    from left to right with the return value being stored in an accummulator..

*/

console.log("--------------------------arr.reduce()-------------------------");
{
    let arr = [4, 5, 6, 7, 8]
    //lets get the sum of all elements of the array:
    function sumOfArray(sum, number){
        return sum + number;
    }

    
    console.log(arr.reduce(sumOfArray));
    //or
    //console.log(arr.reduce((element, sum)=>{return element + sum}));

}

/*
    arr.reduceRight():
    used to convert values of an array from right to left 
*/

console.log("----------------------------using arr.reduceRight()---------------------");
{
    let arr = [3, 4,6, 7, 8, 9];
    //lets get the sum of all elements of the array from right to left:
    function sumOfArray(sum, number){
        return sum + number;
    }
    console.log(arr.reduceRight(sumOfArray));

}

/*
    arr.reverse():
    used for in-place reversal of the array:
    it returns a reference to the reversed original array

*/
console.log("-------------------------using arr.reverse()------------------------------");
{
    let arr = ["lenny", "Weda", "Orengo"];
    
    console.log(arr.reverse());
}

/*
    arr.shift():
    used for removing the first element of the array
    It returns the removed element of the array.
    If the array is empty it returns undefined.

*/

console.log("-------------------------- using arr.shift()-----------------------------");
{
    let arr = [0, 2, 3, 4, 5, 6, 7, 8,9];
    console.log(arr.shift());
}

/*
    arr.slice(begin, end):
    returns a new array containing a portion of the array on which it is implemented:

*/

console.log("---------------using arr.slice()------------------------------------------");
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 6, 90];
    //lets select elements between 1st and 4th:
    console.log(arr.slice(0, 3));
}

/*
    arr.some(callback(element[, index[, array]])[, thisArg])
    checks whether at least one of the elements in the given array satisfies 
    the condition checked by the argument method..
    returns true immediately even if one of the values fulfills the condition
    and false when none..

*/
console.log("--------------------using arr.some()--------------------------------------");
{
    let arr = [1, 2, 3, 4, 5];
    //lets check whether any of the elements is greater than 6:
    console.log(arr.some((element)=>element > 6));
}

/*
    arr.sort():
    used to sort the array in a given order according to the compare function:
    It is sorted in ascending order if the compare function is omitted..
    It returns a reference to the sorted original array..
*/

console.log("-------------------------using arr.sort()----------------------------------");
{
    let arr = [20,5.2,-120,100,30,0];

    //This gives a weird result as it only compares the first characters:
    console.log(arr.sort());

    //proper numeric sort:
    console.log(arr.sort((a,b)=>a-b));
}

/*

    Array.splice( index, remove_count, item_list);
    The index: This parameter is the index from which the array is modified, starting from 0..
    It could also be negative..which means counting begins from the end..

*/

{
    let names = ["john", "Kevin", "James"];
    console.log(names.splice(1,0,"Lenny", "Christina"));
    console.log(names);
}

/*

    array.toLocaleString() and toString():
    used to convert the element of the given array to a string:
    toString() does the same thing..

*/
console.log("-------------------------------using toLocaleString()---------------------------");

{
    let date = new Date();
    console.log(date.toLocaleString());
    console.log(date.toString());
}

/*
    array.unshift(element1, element2):
    Adds the elements given in the arguments at the beginning of the array and  returns the new length of the 
    array.

*/
{
    let array = ["Nairobi", "Kisumu", "Eldoret", "Mombasa"];
    console.log(array.unshift("Naivasha", "Kitui", "Taita Taveta"));
    console.log(array);
}

/*
    The array constructor property:
    used to return the constructor function for the array object:

*/

console.log("-----------------------The constructor property:------------------------");

{
    let array = [5, 6, 7, 8]
    console.log(array.constructor);
}

/*

    array.length():
    used to return the number of elements of the array:

*/

console.log("---------------------------the length property:-----------------------------");
{
    let array = [5, 6, 7, 55, 89];
    console.log(array.length);
}

