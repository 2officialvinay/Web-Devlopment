function changeText(event){
    console.log(event);
    let fpara = document.getElementById('fpara');
    fpara.textContent = "My Name is Vinay Saini.";
}

let fpara = document.getElementById('fpara');
fpara.addEventListener('click', changeText);

// fpara.removeEventListener('click', changeText);