const person1 = {
    name: 'Max', // inferred as `string`
    age: 30      // inferred as `number`
};

const person2: { name: string; age: number } = {
    name: 'Max',
    age: 30
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for (const hobby of favoriteActivities) {
    console.log(hobby.toUpperCase());
}



const role: [number, string] = [2, 'author'];


enum Role { New = 5, Old }



const eitherXOrY: 'x' | 'y' = 'x'; // Only allows 'x' or 'y'


type Combinable = number | string;



function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log(num);
}


let userInput: unknown;
let userName: string;

userInput = 'Max';

if (typeof userInput === 'string') {
    userName = userInput;
}


function generateError(message: string, code: number): never {
    throw { message, code };
}


class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    describe() {
        console.log('Department: ' + this.name);
    }
}

const accounting = new Department('Accounting');
class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id);
        this.admins = admins;
    }
}


class Helper {
    static createEmployee(name: string) {
        return { name };
    }
}

const emp = Helper.createEmployee('Max');



class Report {
    private lastReport: string;

    get mostRecentReport() {
        return this.lastReport;
    }

    set mostRecentReport(value: string) {
        this.addReport(value);
    }
}

abstract class Department {
    abstract describe(): void;
}

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
const { name: userName, age } = person;


function WithTemplate(template: string, hookId: string) {
    return function<T extends { new(...args: any[]): { name: string } }>(
        originalConstructor: T
    ) {
        return class extends originalConstructor {
            constructor(...args: any[]) {
                super(...args);
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        };
    };
}

function Autobind(_: any, __: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            return originalMethod.bind(this);
        }
    };
    return adjDescriptor;
}


const registeredValidators: { [key: string]: { [key: string]: string[] } } = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required'],
    };
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) return true;
    return Object.keys(objValidatorConfig).every((prop) =>
        objValidatorConfig[prop].every((validator) => validator === 'required' ? !!obj[prop] : true)
    );
}



export class Printer {
    print() {
        console.log("Printing...");
    }
}

import { Printer } from './printer.js';
const printer = new Printer();




const path = require('path');

module.exports = {
    entry: './src/app.ts', // Entry point for the application
    output: {
        filename: 'bundle.[contenthash].js', // Cache-busting with hash
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist' // Base path for bundled files
    },
    devtool: 'inline-source-map', // Source maps for debugging
    module: {
        rules: [
            {
                test: /\.ts$/, // Use ts-loader for .ts files
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'] // Resolve these extensions in imports
    },
    mode: 'development' // Default mode
};


const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'none', // Remove source maps in production
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [new CleanWebpackPlugin()],
    mode: 'production'
};
