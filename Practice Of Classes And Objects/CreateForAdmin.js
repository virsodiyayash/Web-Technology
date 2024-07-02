let Data = "Secret Information";

class User{
    constructor(name , email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("Data = ",Data);
    }
}

class Admin extends User {
    constructor(name , email){
        super(name, email);
    }
    editData(){
        Data = "Some new value";
    }
}


let admin1 = new Admin("admin" , "admin@college.com");