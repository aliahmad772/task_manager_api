// 1. Interface 

interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    completedAt?: Date; // Optional field
}

let t: Task = {
    id: 1,
    title: "Learn TypeScript",
    description: "Learn the basics of TypeScript",
    completed: false
};

console.log(t);

// 1. Primitive and reference types: TypeScript has primitive types like string, number, boolean, null, undefined, and symbol. It also has reference types like arrays, objects, and functions.

let primitiveString: string = "Hello, TypeScript!";
let referenceArray: number[] = [1, 2, 3, 4, 5];

console.log(primitiveString);
console.log(referenceArray);

// 2. Tuples: TypeScript allows you to define a tuple type, which is an array with a fixed number of elements of specific types.

let tuple: [string, number] = ["Hello", 42];
console.log(tuple);

// 3. enum: TypeScript allows you to define an enum type, which is a way to define a set of named constants.

enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Red;
console.log(c);




