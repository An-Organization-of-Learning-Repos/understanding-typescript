function meanList(
  // union type
  theta: number[] | number,
  beta: number | undefined
): number | void {
  if (Array.isArray(theta)) {
    return theta.reduce((a, b) => a + b) / theta.length;
  } else if (beta) {
    return (theta + beta) / 2;
  } else {
    console.log("Please provide a list or two numbers");
  }
}

const meanFromList = meanList([1, 2, 3, 4, 5], undefined);

console.log(meanFromList);

const meanFromNums = meanList(1, 2);

console.log(meanFromNums);

// type alias using a union type of literals
type FunctionResult = number | string;

// Props are a good exampl of aliasing object types
type MADProps = {
  nums: number[];
  resultAs: "number" | "string";
};

function meanAverageDeviation(props: MADProps): FunctionResult {
  // applies callback to reduce to one vales
  const mean = props.nums.reduce((a, b) => a + b) / props.nums.length;
  // applies callback to each item in the array
  const deviations = props.nums.map((num) => Math.abs(num - mean));
  if (props.resultAs === "string") {
    return `The mean average deviation is ${
      deviations.reduce((a, b) => a + b) / deviations.length
    }`;
  } else if (props.resultAs === "number") {
    return deviations.reduce((a, b) => a + b) / deviations.length;
  }
  return "Please tell me the type of the return";
}

const numList = [1, 2, 3, 4, 5];

console.log(meanAverageDeviation({ nums: numList, resultAs: "string" }));

console.log(
  meanAverageDeviation({ nums: [1, 2, 3, 4, 5], resultAs: "number" })
);

// type User = { name: string; age: number };
// const  user: User = ['Max', 29]; // TYPES ARE NOT COMPATIBLE, USER IS NOT FOR ARRAYS

// const user:User ={name:'Max', age:29}; // TYPES ARE COMPATIBLE, USE RIS A OBJECT
