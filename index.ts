console.log("Welcome to type script");
let checkConsole = "TypeScript is in the console";
console.log(checkConsole);

//Constructor || Class

class User {
  constructor(public name: string, public email: string, public id: number) {}
}

const activeUser = new User("Rashed", "Rashed@gmail.com", 202);
