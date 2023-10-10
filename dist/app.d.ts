declare function Logger(logString: string): (constructor: Function) => void;
declare function WithTemplate(template: string, hookId: string): (constructor: any) => void;
declare function PropertyDecorator(target: any, propertyName: string | Symbol): void;
declare function AccessorDecorator(target: any, name: string, descriptor: PropertyDescriptor): void;
declare function MethodDecorator(target: any, name: string | Symbol, descriptor: PropertyDescriptor): void;
declare function ParameterDecorator(target: any, name: string | Symbol, position: number): void;
declare class Product {
    title: string;
    private _price;
    set price(val: number);
    constructor(t: string, p: number);
    getPriceWithTax(tax: number): number;
}
declare class Obj {
    get price(): number;
}
//# sourceMappingURL=app.d.ts.map