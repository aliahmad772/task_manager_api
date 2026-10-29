// Sync
console.log("1 Sync");

// Macrotask: It has lower priority then the microtasks 
setTimeout(()=>{ console.log("2 Macro Task")});

// It is an example of micro task it runs after sync code
Promise.resolve().then(()=>{ console.log("3 Micro Task")})

// Sync
console.log("4");

// MacroTask
setTimeout(()=> { console.log("5")});

// The code inside the async func just before the await act as sync and the code after the await act as microtask code
const run = async() => {
    console.log("6");

    await Promise.resolve().then(()=>{
        console.log("7")
    }    
)}

// Func call
run();

// Output:

// 1 Sync
// 4
// 6
// 3 Micro Task
// 7
// 2 Macro Task



