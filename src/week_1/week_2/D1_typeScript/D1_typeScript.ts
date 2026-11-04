// 1. Type Annotation: TypeScript allows us to specify a data type to a variable so that it can hold value of that type. It helps us to detect errors.

let message: string = "Hello, TypeScript!";


console.log(message);

// 2. Interfaces: TypeScript helps us to define the structure of objects using interfaces.

interface Person {
    name: string;
    age: number;
    married: boolean;
}

const p: Person = {
    name: "John Doe",
    age: 30,
    married: true
};

console.log(p);

// 3. Union Types: TypeScript allows you to define variables that can hold multiple types using union types. This is useful when a variable can have more than one type.

let id: string | number = "12345";

console.log(id);

// 4. Type Literals: TypeScript allows you to define a variable that can only hold a specific set of values using type literals. This is useful when you want to restrict the values that a variable can take.

type Direction = "up" | "down" | "left" | "right";
let direction: Direction = "up";

console.log(direction);

// 5. Optional Fields: TypeScript allows us to define optional fields.

interface Car {
    make: string;
    model: string;
    year?: number; // Optional field
}

const myCar: Car = {
    make: "Toyota",
    model: "Camry"
};

console.log(myCar);
