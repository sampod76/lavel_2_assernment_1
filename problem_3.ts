/* Create a TypeScript program that uses a generic function to reverse an array of strings, and takes a variable number of strings to the array using rest parameters. Provide an example of calling the function with a variable number of strings. */


const reviousFriend=<T>(...friend:Array<T>):Array<T>=>{
    return friend.reverse()
}
const result3= reviousFriend<string>("sampod","hosine","kamal")
console.log(result3);
