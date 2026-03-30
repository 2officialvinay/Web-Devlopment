function sayName(aboutMe, Name){
    console.log("Hello! I am", Name);
    aboutMe();
}

function aboutMe(){
    console.log("And I am Developer now.");
}

sayName(aboutMe, "Vinay Saini.");