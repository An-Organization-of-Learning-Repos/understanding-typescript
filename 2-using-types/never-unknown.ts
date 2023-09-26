let userInput: unknown; // better than any bc we may actually want a type that could be read as two values

let userName: string;
let num: number = 5;
let userNum: number = 0;
userInput = num;
// userNum = userInput; // err bc unknown is not assignable to number without a type check
userInput = "Max";
// userName = userInput; // err bc unknown is not assignable to string without a type check
if (typeof userInput === "string") {
  userName = userInput;
}

// if a fucntion never returns anything, it can be of type never
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const err = generateError("An error occured", 500);

console.log("lol",err);
