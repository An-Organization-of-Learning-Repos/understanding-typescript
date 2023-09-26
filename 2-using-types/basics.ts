// import { randomInt } from "crypto";

console.log("Hello New World From App.ts");

/**
 * TS supports primitives out the box.
 * We can type variables two ways:
 * 1. Implicitly - with type annotation
 * 2. Explicitly - with type annotation
 */

// implicit type
let numberType = 1;
// explicit type
let numberType2: number = 1;
console.log(typeof numberType, typeof numberType2);

// implicit type
let stringType = "string";

// explicit type
let stringType2: string = "string";

// implicit type
let booleanType = true;

// explicit type
let booleanType2: boolean = true;

// implicit type
let anyType = {};

// explicit type
let anyType2: any = {};

/**
 * We can also type function arguments and return types
 */
function mean(a: number, b: number, showResult: boolean, phrase: string) {
  /**
   * We could use:
   */
  //   if (typeof a !== "number" || typeof b !== "number") {
  //     throw new Error("Please provide numbers");
  //   }
  /**
   * This is becuase of the dynamic nature of JS. We dont know what the type is until runtime
   * But TS is statically typed. We know the type at buildtime because they are defined.
   */
  const result = (a + b) / 2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return (a + b) / 2;
  }
}

const median = (nums: number[]): number => {
  const sortedNums = nums.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedNums.length / 2);
  if (sortedNums.length % 2 === 0) {
    return (sortedNums[middleIndex] + sortedNums[middleIndex - 1]) / 2; // the mean for an even index length
  } else {
    return sortedNums[middleIndex];
  }
};

const mode = (nums: number[]): number => {
  const numMap = new Map<number, number>();
  let maxCount = 0;
  let mode = 0;
  for (const num of nums) {
    if (numMap.has(num)) {
      const newCount = numMap.get(num)! + 1;
      numMap.set(num, newCount);
      if (newCount > maxCount) {
        maxCount = newCount;
        mode = num;
      }
    } else {
      numMap.set(num, 1);
    }
  }
  return mode;
};

/**
 * We cant use this with setting up a tsconfig
 * This is because the browser cant import modules
 * https://bobbyhadz.com/blog/typescript-uncaught-referenceerror-exports-is-not-defined
 * This defines the exports variable and sets it to an
 * empty object, so you won't get an error if properties are accessed on it.
 * Browsers don't support the CommonJS syntax (unless you use a tool like
 * Webpack) of require and module.exports which causes the error.If you run
 * your code in the browser, try removing the module property from your
 * tsconfig.json file and set target to es6.
 */
// const num1 = randomInt(1, 100);
// const num2 = randomInt(101, 200);

const num1 = 478;
const num2 = 912;
let show = true;
mean(num1, num2, show, "The mean is: ");
