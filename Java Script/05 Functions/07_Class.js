class Human{
    // Properties...
    age = 20;
    #weight = 60; // private
    height = 180;

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

let obj = new Human;
console.log(obj.age);
console.log(obj.fetchweight);