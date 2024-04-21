interface User {
    id: number;
    name: string;
    age?: number;
    address: string;
    email: string;
}

let user: User = {
    name: 'John',
    id: 1,
    email: '',
}

interface Employees extends User {
    salary: number;
}

let employee: Employees = {
    name: 'John',
    id: 1,
    email: '',
    salary: 1000
};

export interface login {
    login(): User;
}