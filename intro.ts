// Number
let age: number = 30; // Notes: 'age' can only hold numerical values.

// String
let names: string = "Alice"; // Notes: 'name' must be a string.

// Boolean
let isActive: boolean = true; // Notes: 'isActive' is restricted to true/false.

// Array
let scores: number[] = [90, 85, 88]; // Notes: An array containing numbers.

// Tuple
let user: [string, number] = ["Alice", 25]; 
// Notes: Fixed size array where the first element is a string, the second is a number.




interface User {
    id: number; // Notes: 'id' is a required numeric property.
    username: string; // Notes: 'username' is a required string property.
    isAdmin?: boolean; // Notes: Optional property, defaults to undefined.
  }
  
  const newUser: User = { id: 1, username: "JohnDoe" }; 
  // Notes: Valid because 'isAdmin' is optional.

  


  class Animal {
    private name: string; // Notes: Can only be accessed within this class.
    protected age: number; // Notes: Can be accessed in derived classes.
    public species: string; // Notes: Accessible anywhere.
  
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
  console.log(myDog.getInfo()); // Notes: Outputs info excluding private properties.
  console.log(myDog.bark()); // Notes: Outputs specific behavior of the Dog.
  


  function identity<T>(value: T): T {
    return value; // Notes: 'T' is a type variable representing any type.
  }
  
  console.log(identity<string>("Hello")); // Notes: Explicitly sets T to string.
  console.log(identity<number>(42)); // Notes: Explicitly sets T to number.
  


  enum Direction {
    Up, // Notes: Defaults to 0.
    Down, // Notes: Defaults to 1.
    Left, // Notes: Defaults to 2.
    Right // Notes: Defaults to 3.
  }
  
  console.log(Direction.Up); // Output: 0
  console.log(Direction[0]); // Output: 'Up'
  

  export function add(a: number, b: number): number {
    return a + b; // Notes: Function to add two numbers.
  }
  
  export const PI = 3.14; // Notes: Constant value for Pi.
  


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
  calc.add(5, 10); // Notes: Logs method call before executing it.
  





  // Union
let value: string | number;
value = "Hello"; // Valid
value = 42; // Valid

// Intersection
interface Shape {
  color: string;
}

interface Circle {
  radius: number;
}

type ColoredCircle = Shape & Circle; 
// Notes: Combines Shape and Circle interfaces.

const circle: ColoredCircle = { color: "red", radius: 10 };
// Notes: Must have properties from both Shape and Circle.



// Partial
interface Todo {
    title: string;
    description: string;
  }
  
  const partialTodo: Partial<Todo> = { title: "Learn TypeScript" };
  // Notes: Makes all properties optional.
  
  // Readonly
  const readonlyTodo: Readonly<Todo> = { title: "Learn TS", description: "In-depth" };
  // readonlyTodo.title = "Change"; // Notes: Error, cannot modify.
  