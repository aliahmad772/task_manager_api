I have learned the basics of eventLoop. JS runs on a single thread means it only performs one task at a time. Event loop allows it to run multiple tasks. 

Components of Event Loop:
1. Call Stack: Where a code actually runs one func at a time.
2. Node API's: It handle's the slower stuff in the background. So the stack doesn't get blocked.
3. Callback Queue: Finished background task waits here for their turn to run. Micro tasks runs before the Macro tasks.
4. Eventloop: It keep checking if the stack is empty. If yes, then it first run microtask and then macrotasks.

Micro Tasks: 
1. Promises.
2. Await.

Macro Tasks:
1. setTimeout.
