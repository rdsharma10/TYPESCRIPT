// ======================== Basic Types ========================
let age: number = 30; // Age as a number
let name: string = "Alice"; // Name as a string
let isActive: boolean = true; // Boolean flag for activity
let scores: number[] = [90, 85, 88]; // Array of numbers
let user: [string, number] = ["Alice", 25]; // Tuple: string, number

// ======================== Interface ========================
interface User {
  id: number;
  username: string;
  isAdmin?: boolean; // Optional property
}

const newUser: User = { id: 1, username: "JohnDoe" }; // Valid object

// ======================== Class with Inheritance ========================
class Animal {
  private name: string;
  protected age: number;
  public species: string;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  public getInfo(): string {
    return `Name: ${this.name}, Age: ${this.age}, Species: ${this.species}`;
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, age: number, species: string, breed: string) {
    super(name, age, species);
    this.breed = breed;
  }

  public bark(): string {
    return `Woof! I am a ${this.breed}.`;
  }
}

const myDog = new Dog("Buddy", 4, "Canine", "Golden Retriever");
console.log(myDog.getInfo());
console.log(myDog.bark());

// ======================== Generics ========================
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello")); // Output: "Hello"
console.log(identity<number>(42)); // Output: 42

// ======================== Enum ========================
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up); // Output: 0
console.log(Direction[0]); // Output: 'Up'

// ======================== Module Import/Export ========================
// Assuming this file is `mathUtils.ts` and imported in another module
export function add(a: number, b: number): number {
  return a + b;
}
export const PI = 3.14;

// ======================== Decorators ========================
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments: ${args}`);
    return original.apply(this, args);
  };
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
calc.add(5, 10); // Logs the method call and arguments

// ======================== Union and Intersection ========================
type Value = string | number;
let value: Value = "Hello"; // Union type
value = 42;

interface Shape {
  color: string;
}

interface Circle {
  radius: number;
}

type ColoredCircle = Shape & Circle;
const circle: ColoredCircle = { color: "red", radius: 10 };

// ======================== Advanced Types ========================
interface Todo {
  title: string;
  description: string;
}

const partialTodo: Partial<Todo> = { title: "Learn TypeScript" }; // Partial example
const readonlyTodo: Readonly<Todo> = { title: "Learn TS", description: "In-depth" };

// readonlyTodo.title = "New Title"; // Error: Readonly prevents modification

// ======================== Async/Await ========================
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData(): Promise<string> {
  await delay(1000); // Simulates network delay
  return "Fetched Data";
}

async function main(): Promise<void> {
  console.log("Fetching data...");
  const data = await fetchData();
  console.log(`Data: ${data}`);
}

main();
