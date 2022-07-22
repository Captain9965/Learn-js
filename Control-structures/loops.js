/*
    js supports c style for while, do..while and for loops
*/
array = ["Lenny", "Weda", "Orengo"];
array.forEach(element => {
    console.log(element);
});

/* 
    looping through an object using for..in loop
*/
let obj = new Object
obj = {
    Name: "Lenny Weda",
    age: "26",
    profession: "Software Engineer",
};

/* for in loop in javasript*/

for (let value in obj){
    console.log(`${value} -> ${obj[value]}`);
}
