1) What is TypeScript, and how is it different from JavaScript?
ANS: TypeScript is an object-oriented programming language developed by Microsoft Corporation, whereas JavaScript is the programming language for the web.JavaScript is a scripting language which helps you create interactive web pages whereas Typescript is a superset of JavaScript.Typescript code needs to be compiled while JavaScript code doesn’t need to compile

2)Can you explain the difference between "interface" and "type" in TypeScript?
ans:
Type--> A type alias is a name for any type. Type aliases can be used to represent not only primitives but also object types, union types, tuples and intersections.
interface--> One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

3) Can you give an example of how to use generics in TypeScript?
ans:Generics are a fundamental feature of statically-typed languages, allowing developers to pass types as parameters to another type, function, or other structure. When a developer makes their component a generic component, they give that component the ability to accept and enforce typing that is passed in when the component is used, which improves code flexibility, makes components reusable, and removes duplication.

4)What is the difference between an "unknown" and "any" type in TypeScript?
unknown: as a developer I don't know the type yet or at the current point of usage but I would later be able to decide the type, so I can hint to typescript to ask me for the type before usage by using unknown
any: I may not know the type / I don't care about the type so I have to skip type checking

5)What is the "as" keyword used for in TypeScript?
ans:The as keyword is a type assertion in typescript. Type assertion is used such that we can set the data type of the variable on our own and tells the compiler not to infer it on its own. Type assertion is used to tell the compiler that we want to treat any as a number, or string. We must be sure while using type assertion as it disables type checking so the program may not run correctly if we are not confident enough. The as keyword is just a way to type assertion in typescript

6)Can you give an example of how to use "readonly" properties in TypeScript?
ans:readonly is used to make a property as read-only. Read-only members can be accessed outside the class, but their value cannot be changed. Since read-only members cannot be changed outside the class, they either need to be initialized at declaration or initialized inside the class constructor.

7)Can you explain what a "tuple" is in TypeScript?
ans:A tuple is a typed array with a pre-defined length and types for each index.
Tuples are great because they allow each element in the array to be a known type of value.

