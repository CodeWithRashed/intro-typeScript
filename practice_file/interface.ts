interface GoogleUser {
    name: string,
    id: number,
    getPackage():boolean,
    getCoupons?():number
}

interface GoogleUser {
    email: string
}

interface AdminInter extends GoogleUser {
    username: string, 
    role: "admin" | "user" | "mod"
}
const userData: AdminInter = {
    name: "Rashed",
    username : "admin",
    role: "admin",
    email:"rashed@gmail.com",
    id: 222,
    getPackage() {
        return true
    },
    getCoupons() {
        return 202
    },
}
