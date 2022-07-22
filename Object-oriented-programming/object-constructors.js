/*
    object constructors in js 
    has since been replaced by the ES6 class:

*/
function car(model, engine_capacity, colour){
    this.model = model;
    this.engine_capacity = engine_capacity;
    this.colour = colour
}
car.prototype.get_details = function(){
    console.log(`The model of the car is ${this.model}`);
}

let car1 = new car("Toyota", 2500, "Red");
console.log(car1.model);




