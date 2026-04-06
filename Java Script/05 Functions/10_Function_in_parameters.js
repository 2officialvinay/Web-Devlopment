function getAge(){
    return 25;
}

function main(name = "VINAY SAINI", age = getAge()){ // getAge() function used as parameter in function...
    console.log(" Name:", name, "\n", "Age:", age);
}

main();  // By default..
main("Vinay Saini", 20);