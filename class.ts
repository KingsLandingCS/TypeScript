import { login } from './interface';

interface Address {
    street: string;
    city: string;
    state: string;
    pin: string
}

class Employee implements login {
    #id: number;
    protected name: string;

    address: Address;

    get empId(): number {
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }


    static getEmployeeCount(): number {

        return 50;
    }

    constructor(id: number, name: string, address: Address) {

        this.#id = id;
        this.name = name;
        this.address = address;
    }
    login(): User {
        return {
            name: 'John',
            id: 1,
            email: '',
        }
    }

    getNameWIthAddress(): string {

        return `${this.name} lives at ${this.address}`;
    }
}

let john = new Employee(1, "John", {
    street: "ABC",
    city: "Bangalore",
    state: "Karnataka",
    pin: "123456"
});

john.empId = 100;
console.log(john.empId);


Employee.getEmployeeCount();



class Manager extends Employee {
    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }
    getNameWIthAddress(): string {

        return `${this.name} lives at ${this.address}`;
    }
}



let address = john.getNameWIthAddress();

console.log(address);


let mike = new Manager(2, "Mike", "456 Main St");


console.log(mike.getNameWIthAddress());
