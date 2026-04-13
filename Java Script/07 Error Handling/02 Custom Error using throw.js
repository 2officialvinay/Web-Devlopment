try{
    console.log("Try block started...");
    console.log(x);
    console.log("Try block ended...");
}
catch(error){
    console.log("An error occurred...");
    throw new Error("You have not declared x.");
}
finally{
    console.log("I will execute everytime as I am Inside finally block.");
}