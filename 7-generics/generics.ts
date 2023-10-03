// const names: Array = ["Who", "Mike Jones"]; // Array is a type but doesnt care about what you are storing
// const names: Array<string> = ["Who", "Mike Jones"]; // Array can use a genric type to specify what you are storing

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// const mergedObj = merge({ name: "Who" }, { age: 30 });
// console.log(mergedObj);

// mergedObj.name; // This will error because TS doesnt know what the object will be

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const mergedObj = merge(
  { name: "Whos Who", hobbies: ["Hating on jimbe"] },
  { age: 30 }
);
console.log("ob jay", mergedObj);
console.log(mergedObj.name);

// function merge2<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB); // we need to extend object to tell TS that we are passing in an object, not this way in the video tho
// }

// const mergedObj2 = merge2({ name: "Page" }, { age: 30 });
// console.log("ob jay 2", mergedObj2);

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, String] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndPrint("Hello New World!"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Was really outside" }, "name"));

class DatatStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DatatStorage<string>();
textStorage.addItem("Who");
textStorage.addItem("Mike Jones");
// textStorage.removeItem("Who");
console.log(textStorage.getItems());

const textStorage2 = new DatatStorage<number>();
textStorage2.addItem(21);
textStorage2.addItem(21);
textStorage2.addItem(1017);
textStorage2.removeItem(21);
console.log(textStorage2.getItems());

// const objStorage = new DatatStorage<object>(); // the constraint placed in the class above will not allow us to use a object type
// const qobj = { name: "qwelian" };
// objStorage.addItem(qobj);
// objStorage.addItem({ name: "damali" });

// objStorage.removeItem(qobj); // This will not work because the object is not the same reference

// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  // Partial is a generic type that will make all the properties optional
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal; // This is a type cast
}

const names: Readonly<string[]> = ["Who", "Mike Jones"];

// names.push("Page"); // This will error because the array is readonly
// names.pop(); // This will error because the array is readonly
