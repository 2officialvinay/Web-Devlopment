let src = {
    age: 20,
    weight: 60,
    height: 170
}

// Clonning using spread operator(...)
let dest = {...src};
dest.age = 21;

console.log("Source : ", src);
console.log("Destination : ", dest);