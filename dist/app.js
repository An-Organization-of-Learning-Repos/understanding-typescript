"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    console.log("LOGGER FACTORY");
    return function (constructor) {
        console.log("Logging...");
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log("TEMPLATE FACTORY");
    console.log("\n");
    return function (constructor) {
        console.log("Rendering template");
        console.log("\n");
        const el = document.getElementById(hookId);
        const p = new constructor();
        if (el) {
            el.innerHTML = template;
            el.querySelector("h1").textContent = p.name;
        }
    };
}
function PropertyDecorator(target, propertyName) {
    console.log("Property decorator!");
    console.log(target, propertyName);
    console.log("\n");
}
function AccessorDecorator(target, name, descriptor) {
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
    console.log("\n");
}
function MethodDecorator(target, name, descriptor) {
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
    console.log("\n");
}
function ParameterDecorator(target, name, position) {
    console.log("Parameter decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
    console.log("\n");
}
class Product {
    title;
    _price;
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    PropertyDecorator,
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    AccessorDecorator,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Product.prototype, "price", null);
__decorate([
    MethodDecorator,
    __param(0, ParameterDecorator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Product.prototype, "getPriceWithTax", null);
class Obj {
    get price() {
        return 4;
    }
}
//# sourceMappingURL=app.js.map