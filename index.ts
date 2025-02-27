type GreetingFunction = {
    (name: string): string; // Call signature
    description: string;    // Additional property
};

const greet: GreetingFunction = (name: string) => {
    return `Hello, ${name}!`;
};

greet.description = "A function to greet users";

console.log(greet("Alice"));          
console.log(greet.description); 

type Calculator = {
    (a: number, b: number): number; // Call signature
    operation: string;              // Additional property
};

const add: Calculator = (a: number, b: number) => a + b;
add.operation = "Addition";

const multiply: Calculator = (a: number, b: number) => a * b;
multiply.operation = "Multiplication";

console.log(`${add.operation}: ${add(5, 3)}`);        
console.log(`${multiply.operation}: ${multiply(5, 3)}`); 

function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); 
console.log(greet("Bob", "Good morning"));
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greet("Alice")); 
console.log(greet("Bob", "Good morning")); 

function createUser(username: string, age?: number, email?: string): string {
    let userInfo = `Username: ${username}`;
    if (age !== undefined) {
        userInfo += `, Age: ${age}`;
    }
    if (email !== undefined) {
        userInfo += `, Email: ${email}`;
    }
    return userInfo;
}

console.log(createUser("john_doe")); 
console.log(createUser("jane_doe", 28)); 
console.log(createUser("sam_smith", 30, "sam@example.com"));


type Point = {
    x: number;
    y: number;
};

function printPoint(point: Point): void {
    console.log(`x: ${point.x}, y: ${point.y}`);
}

const myPoint: Point = { x: 10, y: 20 };
printPoint(myPoint);


interface Point {
    x: number;
    y: number;
}

function displayPoint(point: Point): void {
    console.log(`x: ${point.x}, y: ${point.y}`);
}

const myPoint: Point = { x: 15, y: 25 };
displayPoint(myPoint);


class Person {
    private _name: string;
  
    constructor(name: string) {
      this._name = name;
    }
  
    get name(): string {
      return this._name;
    }
  
    set name(newName: string) {
      if (newName.length > 0) {
        this._name = newName;
      }
    }
  }
  
  const person = new Person("Alice");
  console.log(person.name);
  person.name = "Bob";
  console.log(person.name);