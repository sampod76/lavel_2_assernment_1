/* Create a TypeScript program that declares a function that takes two parameters, a string and a number. The function should log the string parameter repeated the number of times specified by the number parameter. If the number parameter is not provided, it should default to 3. */

const repited=(name:string,count:number=3):void=>{
console.log(name.repeat(count));
}
repited("sampod",5)
