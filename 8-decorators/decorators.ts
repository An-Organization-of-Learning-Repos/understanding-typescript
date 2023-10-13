function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log("Logging...");
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  console.log("\n");

  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template");
        console.log("\n");
        const el = document.getElementById(hookId);
        if (el) {
          el.innerHTML = template;
          el.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}
@Logger("Logginf Person") // decorators execute when the class is defined not instantiated
@WithTemplate("<h1>IM PUSHIN P</h1>", "keep-it-p")
class Person {
  name = "qwelian";
  constructor() {
    console.log("Creating person object...");
    console.log("\n");
  }
}

const person = new Person();

function PropertyDecorator(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!"); // execute when decorator is defined
  console.log(target, propertyName);
  console.log("\n");
}
function AccessorDecorator(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
  console.log("\n");
}
function MethodDecorator(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
  console.log("\n");
}
function ParameterDecorator(
  target: any,
  name: string | Symbol,
  position: number
) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
  console.log("\n");
}
class Product {
  @PropertyDecorator
  title: string;
  private _price: number;

  @AccessorDecorator
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @MethodDecorator
  getPriceWithTax(@ParameterDecorator tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product("Book", 19);

class Obj {
  get price() {
    return 4;
  }
}

function Autobind(_0: any, _1: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "I AM YOU FREE ME BROTHER";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);


// if you ever wan tto simplify come back and work through the suggestions 
// https://www.udemy.com/course/understanding-typescript/learn/lecture/16935744#questions/8835948
interface validatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // {course : { price : ['positive']}, title: ['required']}
  };
}

const registeredValidators: validatorConfig = {};

function Require(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []), // add any additional validators this propName
      "required",
    ],
  };
}

function PosNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    console.log(prop);
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
        case "positive":
          isValid = isValid && obj[prop] > 0;
      }
    }
  }
  return isValid;
}

class Course {
  @Require
  title: string;
  @PosNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;
  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Invalid input, please try again!");
    return;
  }
  console.log(createdCourse);
});
