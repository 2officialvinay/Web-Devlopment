let src = {
    age: 20,
    weight: 60,
    height: 170
}

// Clonning using iteration...
let dest = {};

for(let key in src){
    let newKey = key;
    let newData = src[key];

    dest[newKey] = newData;
}

dest.age = 21;

console.log("Source : ", src);
console.log("Destination : ", dest);