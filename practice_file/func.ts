//Sum of
const addNum = (num1: number, num2: number): number => {
  return num1 + num2;
};

let sumResult = addNum(1, 2);

console.log(sumResult);

const createAccount = (
  email: string,
  pass: string,
  isPaid: boolean
): string => {
  return "Account Created";
};

createAccount("rashed@gmail.com", "1234", false);

//Conditional Return:
function getValue(input: number): string | object {
  if (input > 18) {
    return "Welcome";
  }
  return { message: "Welcome to the website" };
}
