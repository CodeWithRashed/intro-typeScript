type User = {
    name: string,
    email:string,
    isPaid: boolean
}


const createUser = (user: User):User => {
return {name: "Rashed", email: "email@email.com", isPaid: true}
}


//Read Only Keyword
type MongoUser = {
    readonly _id: string,
    name: string,
    email: string
}

let user: MongoUser = {
    _id: "1234",
    name: "rashed",
    email: "string"
}

user._id = "12"


export{}