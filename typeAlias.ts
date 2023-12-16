type User = {
    name: string,
    email:string,
    isPaid: boolean
}


const createUser = (user: User):User => {
return {name: "Rashed", email: "email@email.com", isPaid: true}
}


export{}