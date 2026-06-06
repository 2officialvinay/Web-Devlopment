// Code 1: GOOD

let t1 = performance.now();

for(let i = 1; i <= 100; i++){
    let para = document.createElement('p');
    para.textContent = "This is para: " + i;
    document.body.appendChild(para);
}

let t2 = performance.now();

console.log("Time taken by code 1 is: " + (t2-t1));

// Code 2: OPTIMIZED

let t3 = performance.now();

let mydiv = document.createElement('div');

for(let i = 101; i <= 200; i++){
    let para = document.createElement('p');
    para.textContent = "This is para: " + i;
    mydiv.appendChild(para);
}

document.body.appendChild(mydiv);
let t4 = performance.now();

console.log("Time taken by code 2 is: " + (t3-t4));

// Code 3: BEST

let t5 = performance.now();

let fragment = document.createDocumentFragment();

for(let i = 201; i <= 300; i++){
    let para = document.createElement('p');
    para.textContent = "This is para: " + i;
    fragment.appendChild(para); // No reflow & no repaint required...
}

document.body.appendChild(fragment); // 1 reflow & 1 repaint required...
let t6 = performance.now();

console.log("Time taken by code 3 is: " + (t5-t6));