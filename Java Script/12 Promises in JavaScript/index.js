let promise = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("Promise Fullfilled");
    }
    else{
        reject("Promise Rejected");
    }
});

promise.then((message) => {
    console.log("Message is:" + message);
}).catch((error) => {
    console.log("Error is: " + error);
})