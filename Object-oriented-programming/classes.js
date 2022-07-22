/*
    classes in js are a blueprint of an object. Unlike other 
    object oriented languages, there are no classes in js. It is a protitype  based 
    object oritented language, as it defines behaviour using a contructor function and reuses it using 
    the prototype.
    js classes which were introduced in ECMA2015 are just syntactical sugar over prototype based inheritance.

*/

//defining a class using es6 syntax:

class vehicle{
    constructor(name, model, engine_capacity){
        this.name = name;
        this.model = model;
        this.engine_capacity = engine_capacity;

    }
    get_name(){
        return (`the name of this car is ${this.name}`);
    }
    get_model(){
        return(`The model of this car is ${this.model}`);
    }
    get_engine_capacity(){
        return (`The engine capacity of this car is ${this.engine_capacity}`);
    }

};

let car = new vehicle("Mazda", "Atenza", 2000);
console.log(car.get_name());

/*
        ABSTRATION:

    One thing to note is that there are no access modifiers in js
    however, we can define a function within a function prototype using let 
    to restrict its access outside the object
*/

function car_prototype(name, model, engine_cc){
    let car_name = name;
    let car_model = model;
    let car_engine_cc = engine_cc;

    let get_name_private = function(){
        return (`The private name of this car is ${car_name}`);
    }
    this.get_name_public = function(){
        return (`The public name of this car is ${car_name}`);
    }
}

let car1 = new car_prototype("toyota", "Land Cruiser", 4600);
console.log(car1.get_name_private); //undefined
console.log(car1.get_name_public());

/*
    Inheritance:
    Unlike in other languages where classes inherit classes, 
    in js, objects inherit objects

    js also supports method overriding
*/

class sports_car extends vehicle{
    constructor(name, model, engine_capacity,trim_level){
        //super keyword for calling the above class constructor:
        super(name, model, engine_capacity);
        this.trim_level = trim_level;

    }
    get_trim_level(){
        console.log(super.get_engine_capacity());
        return(`The trim level of this car is ${this.trim_level}`);
    }
}

let mycar = new sports_car("mazda", "Atenza", 2500,"sports");
console.log(mycar.get_trim_level());
