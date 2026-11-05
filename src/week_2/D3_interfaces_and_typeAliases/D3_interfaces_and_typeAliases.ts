// 1. Extending Interface: TS provide's us extending interface feature, which allows us to create a new interface based on an existing one. This is useful for creating more specific types while reusing existing ones.

interface User {

    id: number;
    name: string;
    email: string;
    age: number;
    isActive: boolean;

}

interface Admin extends User {
    permissions: string[];
}

const admin: Admin = {
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    age: 30,
    isActive: true,
    permissions: ["read", "write", "delete"]
};

console.log(admin);

// 2. Type Aliases: Type aliases allow us to create a new name for a type. This can be useful for simplifying complex types or creating more readable code.

type id = number | string;

const userId: id = 12345;
const anotherUserId: id = "abcde";

function abcd (obj: id): void {
    console.log(`The ID is: ${obj}`);
};
abcd(userId);
abcd(anotherUserId);

// 3. Intersection Types: Intersection types allow us to combine multiple types into one. This can be useful for creating more complex types that have properties from multiple sources.

type UserDetails = {
    name: string;
    age: number;
    contact: {
        email: string;
        phone: string;
    };
};

type AdminDetails = UserDetails & {
    permissions: string[];
};

// 4. Class and Constructor: Classes in TypeScript are a blueprint for creating objects. They can have properties and methods, and can also implement interfaces. Where as contructors are special methods used for creating and initializing objects created with a class.


class Person {

    constructor(public name: string, public age: number) {}
}

const person1 = new Person("Ali", 25)

console.log(person1);



