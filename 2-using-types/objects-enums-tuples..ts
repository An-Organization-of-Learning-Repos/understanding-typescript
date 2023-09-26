enum area {
  STATS,
  CALCULUS,
  LINEARALGEBRA = "LINEARALGEBRA",
}

// this is called a type alias
type stats = {
  function: (num1: number, num2: number) => number;
  lable: string;
  usedFor: string[];
  learned: [number, string]; // TS technically supports tuples though you can do array methods on...
  area: area.STATS;
};

// why do we get these errs
const meanObj: stats = {
  function: (a, b) => (a + b) / 2,
  lable: "mean",
  usedFor: ["averages", "central tendency", "mean absolute deviation"],
  learned: [1, "First on Stat Work"],
  area: area.STATS,
};

console.log(meanObj.lable);

for (const use of meanObj.usedFor) {
  console.log(use.toLocaleLowerCase()); // gets the right type
  //   console.log(use.map); // gets an error becauase its an artray of strings
}

console.log(meanObj.learned);

// meanObj.learned[0] = "test"; // err bc this is a string not a number

meanObj.learned[0] = 2;
meanObj.learned.push("test"); // oof

console.log(meanObj.learned);

// if (meanObj.area === "STATS") {
//   console.log("This is a stats function");
// }

console.log(meanObj.area);
