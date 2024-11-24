interface Logger {
    log(message: string): void;
}

class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(`Log: ${message}`);
    }
}

const logger = new ConsoleLogger();
logger.log("Hello, TypeScript!"); // Output: Log: Hello, TypeScript!



class MathUtil {
    static pi = 3.14;

    static calculateCircumference(radius: number): number {
        return 2 * MathUtil.pi * radius;
    }
}

console.log(MathUtil.calculateCircumference(5)); // Output: 31.400000000000002




class Employee {
    private _salary: number;

    constructor(salary: number) {
        this._salary = salary;
    }

    get salary(): number {
        return this._salary;
    }

    set salary(amount: number) {
        if (amount > 0) {
            this._salary = amount;
        } else {
            console.log("Invalid salary amount");
        }
    }
}

const emp = new Employee(5000);
console.log(emp.salary); // Output: 5000
emp.salary = 6000;
console.log(emp.salary); // Output: 6000
