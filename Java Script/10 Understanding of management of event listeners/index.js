function alertPara(event){
    alert("You have clicked on para: " + event.target.textContent);
}

let myDiv = document.getElementById('container');

myDiv.addEventListener('click', alertPara);