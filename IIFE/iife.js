/*
    This refers to an immediately invoked function expression, which means it is immediately invoked
    and executed as soon as it is defined. the primary reason to do this is to
    immediately execute the code and to avoid polluting the global scope.
    Example:
*/

let PaintColour = "red";

(()=>{
        // return 
            // ()=>{
            //     console.log("arrow function called");
            // },
            changeColourtoBlue: ()=>{
                console.log("called ChangeColourToBlue()");
                return PaintColour;
            }
            // changeColourToGreen: ()=>{
            //     console.log("called ChangeColourToGreen()");
            //     return PaintColour;
            // }
            // (console.log("called function"))
        
    }
)();

// console.log(paint.changeColourToGreen())