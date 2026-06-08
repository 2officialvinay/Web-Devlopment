
async function getData(){
    // Getting request -> It is a type of asynchronous code...
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');

    // Parsing Json -> It is also a type of asynchronous code...
    let data = await response.json();
    console.log(data);
}

getData();