/*

    A map is a collection of elements where each element is stored as a key, value pair
    can hold both objects and primitives as either keys or values. When iterated, it returns the key 
    value pairs in the same order as inserted.
    In maps, if the keys passed already exists, than the new value will replace the old value.
    A for loop returns an array of all [key, value] pairs for each iteration
    The following are the differences between maps and javascript objects:
        1. The keys can be of any type, which in the case of objects, can only be strings and symbols
        2. The size can be known using the size property unlike for objects which has to be done manually
        3. Should be used where there will be frequent addition and subtraction of elements since it can be 
        directly iterated whereas obtaining its key value pairs can be obtained in a specific manner.
*/

/*

    map.clear():
    used to remove all elements from the map object:
    map.set(key, value):
    used to add elements to the map:

*/

function printMap(map){
    for ([key,value] of map){
        console.log(`${key}:${value}`);
    }
    return map.size
}

console.log("----------------map.clear()-----------and map.set(key, value)----------------------");

{
    let myMap = new Map();
    myMap.set("name", "Lenny")
    myMap.set("age", 20);

    console.log(printMap(myMap));

    //clear map and display the map:
    myMap.clear();
    console.log(printMap(myMap));
}

console.log("--------------------map.delete(key)-----------------------------------------------");
{
    let myMap = new Map();
    myMap.set("country", "Kenya");
    myMap.set("capital", "Nairobi");
    console.log(printMap(myMap));

    //will return false since the key is not present:
    console.log(myMap.delete("name"));
}

/*
    map.entries():
    used to return an iterator object containing all the [key, value] pairs of each element of the map:

*/
console.log("----------------------------map.entries()----------------------------------------");

{
    let myMap = new Map();
    myMap.set("name", "Lenny");
    myMap.set("language", "English");

    //iterating through the map with the iterator:
   let outerIter = myMap.entries();
   let innerIter = myMap.entries();
   while (!outerIter.next().done){
    console.log(innerIter.next().value);
   }

}

/*
    map.forEach(callback, value, key, thisArg):
    used to loop over the map with the given function and executes it over all
    the key, value pairs.
*/
console.log("----------------------using the map.forEach()-----------------------------------------");

function logMap(map){
    map.forEach((key, value) => {
        console.log(`${key} : ${value}`);
    });
    return map.size;
}

{
    let myMap = new Map();
    myMap.set(0, "Lenny");
    myMap.set(1, "Keller");
    myMap.set(2, "James");
    logMap(myMap);

}

/*

    map.get(key):
    used to get a specific element in the map through its key. If not present, then it
    returns undefined.

    map.has(key):
    returns a boolean value indicating whether an element with the given key exists or not:

*/
console.log("------------------------------using map.get(key)--- and map.has(key)----------------------");
{
    let myMap = new Map();
    myMap.set(0, "Lenny");
    myMap.set(1, "Keller");
    myMap.set(2, "James");

    //will find "James":
    console.log(myMap.get(2));

    //will return false as the key is not present:
    console.log(myMap.has(3));
}


/*

    map.keys():
    returns an iterator object of the keys of the map:

*/
console.log("--------------------------using map.keys()----------------------------------");
{
    let myMap = new Map();
    myMap.set(0, "Lenny");
    myMap.set(1, "Keller");
    myMap.set(2, "James");

    console.log(myMap.keys().next().value);
}
