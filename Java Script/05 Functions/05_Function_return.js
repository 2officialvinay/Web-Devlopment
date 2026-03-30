function Num(number){
    return function square(number){
        return number**2;
    }
}

let ans = Num(5);
let result = ans(10);
console.log("Square is",result);