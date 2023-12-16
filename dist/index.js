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
//Generics types
function GenericsFunc(val) {
    return val;
}
function genericsTwo(val) {
    return "ab";
}
function genericsThree(val) {
    return val;
}
function getDatabaseProducts(products) {
    return products[4];
}
//Generics using arrow function!
const getProductData = (product) => {
    return product[1];
};
