let promise = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve(1);
    }
    else{
        reject("Promise Rejected.");
    }
});

promise.then((message) => {
    console.log("First value: " + message);
    return 2;
}).then((message) => {
    console.log("Second value: " + message);
    return 3;
}).then((message) => {
    console.log("Third value: " + message);
}).catch((error) => {
    console.log(error);
}).finally((message) => {
    console.log("Execution Completed.");
})