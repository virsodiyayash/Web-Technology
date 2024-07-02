// class Parent{
//     hello(){
//         console.log("Hello!");
//     }
// }

// class Child extends Parent{}

// let obj = new Child();


class Person {
    constructor(name){
        this.species = "homo sapiens";
        this.name = name;
    }
    eat(){
        console.log("eat!");
    }

    sleep(){
        console.log("sleep!");
    }
}

class Engineer extends Person{
    constructor(branch){
        super(name); 
        this.branch = branch;
    }
    work(){
        super.eat();
        console.log("Solve Problems!");
    }
}

// let yash = new Engineer();

let obj = new Engineer("Chemical Engineer");