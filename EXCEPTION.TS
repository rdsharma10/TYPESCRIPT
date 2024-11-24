function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}



try {
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    if (error instanceof Error) {
        console.error("Error:", error.message);
    } else {
        console.error("Unknown error occurred.");
    }
} finally {
    console.log("Execution completed");
}


class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ValidationError"; // Set error name
    }
}

function validateAge(age: number): void {
    if (age < 18) {
        throw new ValidationError("Age must be at least 18.");
    }
    console.log("Age is valid.");
}

try {
    validateAge(15);
} catch (error) {
    if (error instanceof ValidationError) {
        console.error("Validation Error:", error.message);
    } else {
        console.error("Unexpected Error");
    }
}


function riskyOperation(): string | never {
    if (Math.random() > 0.5) {
        throw new Error("Operation failed.");
    }
    return "Success!";
}

try {
    const result = riskyOperation();
    console.log(result);
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error("Caught Error:", error.message);
    } else {
        console.error("Unknown Error:", error);
    }
}

