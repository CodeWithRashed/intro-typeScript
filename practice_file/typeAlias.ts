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

//Combine Card Type

type CardHolderName = {
    name: string
}


type CardNumber = {
    number: number
}

type CardDetails = CardHolderName & CardNumber & {
    cvv: number
}


const cardDetails: CardDetails = {
name: "Rashed",
number: 4242,
cvv: 232
}


export{}