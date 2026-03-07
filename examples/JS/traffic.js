console.log("Hello")

let promise = new Promise((resolve, reject) => {
    // async operation

    const Success=true

    if (Success) {
        resolve(value); // fulfilled
    } else {
        reject(error);  // rejected
    }
});
