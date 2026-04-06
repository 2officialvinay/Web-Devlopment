function sayName(name = "Vinay"){
    console.log("My name is",name);
}
sayName();  // Will access default parameter...
sayName("Vinay Saini");

function heightAndWeight(height = "180", weight = "70"){
    console.log("My height & weight are", height, "&", weight,);
}
heightAndWeight(); // Will access default parameter...
heightAndWeight("176", "60");