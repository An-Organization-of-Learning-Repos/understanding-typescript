function addItUp(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(addItUp(5, 12));

// let combineValues: Function; // This is a function type. It works for any function hough
let combineValues: (a: number, b: number) => number; // This is a function type that matches what we want to do
combineValues = addItUp;
// combineValues = printResult; // if combined values is of type function, then this is allowed. however this could be any function
// combineValues = 5; // This is allowed because combineValues is of type any

console.log(combineValues(8, 8));
