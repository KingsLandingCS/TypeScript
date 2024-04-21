"use strict";
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWIthAddress() {
        return `${this.name} lives at ${this.address}`;
    }
}
let john = new Employee(1, "John", "123 Main St");
let address = john.getNameWIthAddress();
console.log(address);
