/* Write a function that takes in an array of objects with properties name and age, and returns only the objects where the person's age is greater than or equal to 18, */

interface IAdult {
    name: string,
    age: number
}

const personsList:Array<IAdult> =[
    {name:"sampod",age:25},
    {name:"hasn",age:15},
    {name:"allpo",age:65},
    {name:"kobir",age:75},
    {name:"asoan",age:10},
    {name:"probir",age:2}
]

const ChackAdult = (persons: Array<IAdult>):Array<IAdult>=> {
    let AdultPerosn=persons.filter(person =>person.age >= 18)
    return AdultPerosn
}

const result= ChackAdult(personsList)
console.log(result);