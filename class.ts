class Employee {
    id!: number;
    name!: string;
    address!: string;

    constructor(id: number, name: string, address: string) {

        this.id = id;
        this.name = name;
        this.address = address;
    }

    getNameWIthAddress(): string {

        return `${this.name} lives at ${this.address}`;
    }
}

let john = new Employee(1, "John", "123 Main St");
let address = john.getNameWIthAddress();

console.log(address);
