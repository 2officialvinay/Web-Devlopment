const arr = [
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    },
    function(a,b){
        return a/b;
    }
];

let ans = arr[3];
let result = ans(10,5);
console.log(result);