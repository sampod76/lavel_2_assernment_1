/* Create a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message. */

const chackType=(name:unknown):void=>{
    if(typeof name ==="string"){
        console.log("it is string");
    }else{
        console.log("error: this is wrong methord");
    }
}

chackType("sampod")
