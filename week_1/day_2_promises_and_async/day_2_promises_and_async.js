// 1. Promise

const { createHash, randomUUID } = require("node:crypto");

const createRequestId = (id) => {
    if (id === undefined || id === null || id === "") {
        return randomUUID();
    }

    return createHash("sha256").update(String(id)).digest("hex");
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
wait(1000).then(console.log("Wait for 1 sec."))

// 2. Async/Await

const waitAsync = async (id, requestId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        headers: { "X-Request-ID": createRequestId(requestId) },
    });
  return res.json();
}

waitAsync(1).then((data) => console.log(data));

// 3. Async/Await with try/catch

const waitAsyncWithTryCatch = async (id, requestId) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            headers: { "X-Request-ID": createRequestId(requestId) },
        });
        return res.json();
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};