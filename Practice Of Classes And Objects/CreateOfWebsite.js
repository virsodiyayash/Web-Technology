let DATA = "Secret information";

class User{
    constructor(name , email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data = ", DATA);
    }
}


let student1 = new User("Yash" , "yashupatel4@gmail.com");
let student2 = new User("Misari" , "misaripatel3@gmail.com");
let student3 = new User("prachi" , "prachi3@gmail.com");