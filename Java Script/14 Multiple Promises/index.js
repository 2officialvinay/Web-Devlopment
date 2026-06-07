let promise1 = new Promise((resolve,reject) => {
    setTimeout(resolve, 1000, "10");
});

let promise2 = new Promise((resolve,reject) => {
    setTimeout(resolve, 3000, "20");
});

let promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve, 5000, "30");
});

Promise.all([promise3, promise2, promise1])
.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.error("Error: " + error);
})