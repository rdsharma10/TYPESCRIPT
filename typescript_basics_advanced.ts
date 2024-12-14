
// TypeScript Basics, Intermediate, and Advanced Concepts

// =====================
// 1. Basic Types
// =====================

// String, Number, Boolean
let str: string = 'Hello, TypeScript!';
let num: number = 42;
let isActive: boolean = true;

// Array
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ['Alice', 'Bob', 'Charlie'];

// Tuple
let tuple: [string, number] = ['Alice', 30];

// Enum
enum Color {
  Red = 1,
  Green,
  Blue
}
let c: Color = Color.Green;  // 2

// Any type (not recommended but used for dynamic typing)
let unknownType: any = 'Hello';
unknownType = 100;

// Void (used for functions that do not return anything)
function logMessage(message: string): void {
  console.log(message);
}

// Null and Undefined
let n: null = null;
let u: undefined = undefined;

// =====================
// 2. Functions
// =====================

// Function with types
function add(x: number, y: number): number {
  return x + y;
}

// Function type definition
let multiply: (x: number, y: number) => number;
multiply = (x, y) => x * y;

// Optional Parameters and Default Parameters
function greet(name: string, age: number = 30): string {
  return `Hello, ${name}. You are ${age} years old.`;
}

// Rest Parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// =====================
// 3. Object Types
// =====================

// Object type
let person: { name: string, age: number } = { name: 'Alice', age: 25 };

// Interface (more flexible than type aliases)
interface Car {
  make: string;
  model: string;
  year: number;
}

let myCar: Car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2021
};

// =====================
// 4. Classes and Inheritance
// =====================

class Animal {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  breed: string;
  
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
  
  speak(): void {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Buddy', 'Golden Retriever');
dog.speak();  // Buddy barks.

// =====================
// 5. Generics
// =====================

// Generic Function
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>('Hello, Generics!');

// Generic Interface
interface Box<T> {
  value: T;
}

let stringBox: Box<string> = { value: 'Hello' };

// =====================
// 6. Advanced Types
// =====================

// Intersection Types
interface Employee {
  id: number;
  name: string;
}

interface Manager {
  department: string;
}

type ManagerEmployee = Employee & Manager;

let manager: ManagerEmployee = {
  id: 1,
  name: 'Bob',
  department: 'HR'
};

// Union Types
function logId(id: number | string): void {
  console.log(`ID: ${id}`);
}

logId(101);
logId('A123');

// Type Guards
function isString(value: number | string): value is string {
  return typeof value === 'string';
}

let result = isString('test');  // true

// =====================
// 7. Type Aliases and Interfaces
// =====================

// Type Aliases
type Point = { x: number; y: number };
let point: Point = { x: 10, y: 20 };

// Discriminated Unions (for working with multiple types)
type Shape = 
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; sideLength: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
  }
}

// =====================
// 8. Decorators (Advanced)
// =====================

// Decorators are a special kind of declaration attached to a class, method, accessor, or property.

// Example of Class Decorator
function logClass(target: Function) {
  console.log(`Class created: ${target.name}`);
}

@logClass
class Person {
  constructor(public name: string) {}
}

// =====================
// 9. Asynchronous Programming with Promises and Async/Await
// =====================

function fetchData(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url) {
        resolve('Data fetched');
      } else {
        reject('Error: No URL');
      }
    }, 1000);
  });
}

async function getData() {
  try {
    const data = await fetchData('https://example.com');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();

// =====================
// 10. Modules and Namespaces
// =====================

// Exporting a function from a module
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Importing a function from another module
import { greet } from './greetModule';

console.log(greet('Alice'));

// =====================
// 11. TypeScript Configuration (tsconfig.json)
// =====================

// This file allows you to configure how TypeScript behaves during compilation.
// Some important options in tsconfig.json:
// "target": "ES6", // Set JavaScript version
// "module": "commonjs", // Define module system (commonjs, es6, etc.)
// "strict": true, // Enable strict type-checking options

// =====================
// End of Typescript Basics to Advanced
// =====================
