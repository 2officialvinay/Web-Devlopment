let src = {
    age: 20,
    weight: 60,
    height: 170
}

// Clonning using assign method ({}, src)...
let dest = Object.assign({}, src);
dest.age = 21;

console.log("Source : ", src);
console.log("Destination : ", dest);