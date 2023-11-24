interface Admin {
  // can be a type or an interface
  name: string;
  privileges: string[];
}

type Employee = {
  // can be a type or an interface
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// need to use function convention overload bc some rando said so
function add(a: number, b: number): number; // function overload
function add(a: string, b: string): string; // function overload
function add(a: string, b: number): string; // function overload
function add(a: number, b: string): string; // function overload
function add(a: Combinable, b: Combinable) {
  // we can use the type guard 'typeof' to check if a and b are strings
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Max", " Schwarz");
console.log(result.split(" "));

const fetchedUserData = {
  id: "u1",
  name: undefined,
  job: {
    title: "SWE",
    description: "Slavery",
  },
};

const fetchedUserData2 = {
  id: "u1",
  name: "Max",
  job: {
    title: "SWE",
    description: "Slavery",
  },
};

console.log(fetchedUserData?.job?.title); // optionis used here to check if job exists
console.log(
  fetchedUserData?.name ?? "I dont see you having a name. Imma call you Gerald"
); // option is used here to check if name exists
console.log(
  fetchedUserData2?.name ?? "I dont see you having a name. Imma call you Gerald"
); // option is used here to check if name exists
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(employee: UnknownEmployee) {
  console.log("Name:", employee.name);
  // we can use the type guard 'in' to check if employee is an Admin
  if ("privileges" in employee) {
    console.log("Privileges:", employee.privileges);
  }
  // we can use a type guard to check if employee is an Employee
  if ("startDate" in employee) {
    console.log("Start Date:", employee.startDate);
  }
}

printEmployeeInformation(e1);

printEmployeeInformation({ name: "Manu", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving a car...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo...", amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // we can use the type guard 'instanceof' to check if v1 is a Truck
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // we can descriminate the union of Animal to check if animal is a Bird
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed:", speed);
}

// for classes we may want to use the instanceof type guard.

moveAnimal({ type: "bird", flyingSpeed: 10 } as Bird);
moveAnimal({ type: "horse", runningSpeed: 20 } as Horse);
moveAnimal({ type: "horse", runningSpeed: 20 } as Horse);

// for interfaces we will want to use descriminated unions
// because interfaces are not available at runtime, making the instanceof type guard not available

const paragraph = document.getElementById("keep-it-p")! as HTMLParagraphElement;

const userInput = <HTMLInputElement>document.getElementById("user-input");

if (userInput) {
  (userInput as HTMLInputElement).value = "Hi there!";
}

paragraph.textContent = userInput.value;

interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a character!' }
  // indes signature
  // says the object must have a property that is a string and a value that is a string
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Nota valid email!",
  username: "Must start with a capital character!",
  //   password: 89,
};
