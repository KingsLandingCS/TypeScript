function add(num1: number, num2: number, num3?: number): number {

    return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(add(10, 20));

console.log(add(10, 20, 25));



const sub = (num1: number, num2: number, num3 = 10): number => num1 - num2 - num3;

console.log(sub(10, 20));

console.log(sub(10, 20, 5));


const mult = function (num1: number, num2: number): number {

    return num1 * num2;
}

console.log(mult(10, 20));


function add2(num1: number, num2: number, ...num3: number[]): number {

    return num1 + num2 + num3.reduce((a, b) => a + b);
}

let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));


function getItems<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

let concatResult = getItems<number>([1, 2, 3, 4, 5]);

let concatString = getItems<string>(["a", "b", "c", "d", "e"]);