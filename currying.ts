function curry<T extends (...args: any[]) => any>(func: T): (...args: any[]) => any {
    return function curried(...args: any[]): any {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return (...nextArgs: any[]) => curried(...args, ...nextArgs);
        }
    };
}

// Example usage
const add = (a: number, b: number, c: number): number => a + b + c;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6


const user = { name: "John", age: 25 };
const { name, age } = user;
console.log(name, age); // John 25

const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first, second); // 1 2


const name = "Alice";
const message = `Hello, ${name}! Welcome to the platform.`;
console.log(message);
