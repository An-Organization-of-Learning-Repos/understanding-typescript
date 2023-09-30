// some basic JS feats

const userName = "Damali";
// userName = "Damali Tanner"; // error: cannot assign to 'userName' because it is a constant or a read-only property.

let age = 26; // let is preferred over var bc var can be global or function scoped
age = 27;

// var result; // var is global scoped

function add(a: number, b: number) {
  //   var result; // here, var is function scoped. cannot use it outside its function
  let result; // same
  result = a + b;
  return result;
}

// if (age > 20) {
//   let isOld = true; // let is block scoped+

// }
// console.log(isOld);

// console.log(result); // error: cannot find name 'result'

// let and const are block scoped, and available to children of the scopes. var is function or scoped.

/// arrow functions are dope
// const add2 = (a: number = 1, b: number) => a + b;
const add2 = (a: number, b: number = 1) => a + b; // default param should be last

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

button && button.addEventListener("click", (event) => console.log(event));

// as opposed to
button &&
  button.addEventListener("click", function (event) {
    console.log(event);
  });

// default function params
// TS looks at the order of the input and will not assume you should use the default param
printOutput(add2(2)); 

// rest params
const addNumbers = (...numbers: number[]) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

// we can then use rest params to add as many numbers as we want
const addedNumbers = addNumbers(5, 10, 2, 3.7);
