Today I have learn about typeScript bascis. I have covered certain topics like intalling typeScript, managing its files and some of the typescript's concepts. Concepts like:

1. Type annotation: Type script allows us to specify a datatype to our varaible for type safety reasons.
eg: 
    let name : string = "Ali Ahmad Jan";

2. interfaces: Typescript allows us to create objects that have properties of specific data types.
eg:
    interface Student {
        name: string;
        rollno: number;
        age: number;
    }

    const p: Person = {name: Ali Ahmad Jan, rollno: 2212105, age:20}

3. Union type: We can also allows mutliple optional datatypes to a variable.
eg:
    let id: string | number;
    id = "A123";

4. Type Literals: We can assign multiple values to the variable. So, that variable will intake one of the values.
eg: 
    type status = "todo" | "in-progress" | "completed"

    status = "todo";

5. Optional Fields: While defining interfaces we can include the optional properties that can be totally option for user to enter any value to it.
eg: 
    interface Car {
        make: string;
        model: string;
        year?: string; 
    }

