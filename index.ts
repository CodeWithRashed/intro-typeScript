console.log("Welcome to type script");
let checkConsole = "TypeScript is in the console";
console.log(checkConsole);

//Constructor || Class

class User {
  constructor(public name: string, public email: string, public id: number) {}
}

const activeUser = new User("Rashed", "Rashed@gmail.com", 202);


//Generics types
function GenericsFunc(val: string):string {
    return val
}

function genericsTwo(val: boolean | string): boolean | string {
    return "ab"
}

function genericsThree<type>(val: type):type{
    return val
}

function getDatabaseProducts<T>(products: T[]):T{
    return products[4]
}

//Generics using arrow function!
const getProductData = <T>(product: T[]):T => {
    return product[1]
}