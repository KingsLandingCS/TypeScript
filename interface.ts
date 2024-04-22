export interface User {
  id: number;
  name: string;
  age?: number;
  address: string;
  email: string;
}

let { name: userName, email: userLogin }: User = {
  name: "John",
  id: 1,
  email: "",
};

interface Employees extends User {
  salary: number;
}

let employee: Employees = {
  name: "John",
  id: 1,
  email: "",
  salary: 1000,
};

export interface login {
  login(): User;
}

let [user1, user2, ...restUsers]: User[] = [
  {
    name: "John",
    id: 1,
    email: "",
  },
  {
    name: "John1",
    id: 2,
    email: "",
  },
  {
    name: "John2",
    id: 3,
    email: "",
  },
  {
    name: "John3",
    id: 4,
    email: "",
  },
];

console.log(user1);
console.log(user2);
console.log(restUsers);

// let result = restUsers.map((user) => user.id > 3);

// @component({})
// class component {
//   constructor(public name: string) {}
// }
