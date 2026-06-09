function outer(){
    let count = 0;

    function inner(){
        console.log(count++);
    }
    return inner;
}

let inner = outer();

inner(); // 0
inner(); // 1
inner(); // 2