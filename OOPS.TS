class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    getBalance(): number {
        return this.balance; // Accessing private property through a method
    }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // Output: 1500




//ABSTRACTION


abstract class Vehicle {
    abstract move(): void; // Abstract method without implementation

    start(): void {
        console.log("Vehicle started");
    }
}

class Car extends Vehicle {
    move(): void {
        console.log("Car is moving");
    }
}

const myCar = new Car();
myCar.start(); // Output: Vehicle started
myCar.move();  // Output: Car is moving

// INHERITANCE



class Animal {
    constructor(public name: string) {}

    eat(): void {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    bark(): void {
        console.log(`${this.name} is barking`);
    }
}

const myDog = new Dog("Buddy");
myDog.eat(); // Output: Buddy is eating
myDog.bark(); // Output: Buddy is barking


/// POLYMORPHISM



class Shape {
    calculateArea(): void {
        console.log("Area of shape");
    }
}

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }

    calculateArea(): void {
        console.log(`Area of circle: ${Math.PI * this.radius ** 2}`);
    }
}

class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super();
    }

    calculateArea(): void {
        console.log(`Area of rectangle: ${this.width * this.height}`);
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach((shape) => shape.calculateArea());
// Output:
// Area of circle: 78.53981633974483
// Area of rectangle: 24
