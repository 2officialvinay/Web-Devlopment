class Human{
    // Properties...
    age = 20;
    #weight = 60; // private
    height = 180;

    // Constructor...
    constructor(age, height, weight){
        this.age = age;
        this.height = height;
        this.#weight = weight;
    }

    // Behaviour...
    walking(){
        console.log("I am walking.");
    }

    speaking(){
        console.log("I am speaking.");
    }

    get fetchweight(){
        return this.#weight;
    }

    set modifyweight(val){
        this.#weight = val;
    }
}

let obj = new Human(25, 176, 68);
console.log(obj.age);
console.log(obj.height);
console.log(obj.fetchweight);
obj.modifyweight = 70;
console.log(obj.fetchweight);