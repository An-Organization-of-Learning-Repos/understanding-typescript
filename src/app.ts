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

  return function (constructor: any) {
    console.log("Rendering template");
    console.log("\n");

    const el = document.getElementById(hookId);
    const p = new constructor();
    if (el) {
      el.innerHTML = template;
      el.querySelector("h1")!.textContent = p.name;
    }
  };
}
// @Logger("Logginf Person") // decorators execute when the class is defined not instantiated
// @WithTemplate("<h1>IM PUSHIN P</h1>", "keep-it-p")
// class Person {
//   name = "qwelian";
//   constructor() {
//     console.log("Creating person object...");
//     console.log("\n");
//   }
// }

// const person = new Person();

// console.log(person.name);

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
  private set price(val: number) {
    if (val > 0) {
      this._price = val;
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

class Obj {
  get price() {
    return 4;
  }
}
