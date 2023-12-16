type User = {
    name: string,
    id: number
}

type Admin ={
    username: string,
    id: number
}


const user : Admin | User = {
    name: "Rashed",
    id: 202
}


//Unions In Arrays
const combineArray:(string |number)[] = ["1", 1]

let userRole: "Admin"| "User" | "Mod"

userRole = "Mod"

export {}