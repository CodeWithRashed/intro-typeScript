const heros : Array<string>= []
const powerLevel : number[] = []
heros.push("Iron Man")
powerLevel.push(2)
console.log(heros)
console.log(powerLevel)

type AllUser = {
    name: string,
    age: number
}

const allUser : AllUser[] = []

allUser.push({
    name:"Rashed",
    age: 23
})

allUser.push({
    name:"Rayhan",
    age: 24
})
console.log(allUser)