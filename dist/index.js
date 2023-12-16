"use strict";
console.log("Welcome to type script");
let checkConsole = "TypeScript is in the console";
console.log(checkConsole);
//Constructor || Class
class User {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
}
const activeUser = new User("Rashed", "Rashed@gmail.com", 202);
