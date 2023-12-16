"use strict";
//Sum of
const addNum = (num1, num2) => {
    return num1 + num2;
};
let sumResult = addNum(1, 2);
console.log(sumResult);
const createAccount = (email, pass, isPaid) => {
    return "Account Created";
};
createAccount("rashed@gmail.com", "1234", false);
//Conditional Return:
function getValue(input) {
    if (input > 18) {
        return "Welcome";
    }
    return { message: "Welcome to the website" };
}
