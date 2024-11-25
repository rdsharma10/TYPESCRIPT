import { UserController } from './controllers/userController';
import { log } from './utils/logger';

const userController = new UserController();

// Example usage
async function main() {
    log('Starting the application...');

    try {
        // Fetch users
        const users = await userController.getAllUsers();
        log(`Users: ${JSON.stringify(users)}`);

        // Add a new user
        const newUser = await userController.createUser({
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
        });
        log(`User created: ${JSON.stringify(newUser)}`);
    } catch (error) {
        log(`Error: ${error.message}`);
    }
}

main();



import { User } from '../models/userModel';
import { handleServiceError } from '../utils/errorHandler';

export class UserService {
    private users: User[] = [];

    async getAllUsers(): Promise<User[]> {
        return handleServiceError(() => this.users);
    }

    async createUser(user: User): Promise<User> {
        return handleServiceError(() => {
            this.users.push(user);
            return user;
        });
    }

    async findUserByEmail(email: string): Promise<User | null> {
        return handleServiceError(() => {
            return this.users.find((u) => u.email === email) || null;
        });
    }
}



import { UserService } from '../services/userService';
import { validate } from '../decorators/validation';
import { User } from '../models/userModel';

export class UserController {
    private userService = new UserService();

    async getAllUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }

    @validate // Custom decorator
    async createUser(user: User): Promise<User> {
        return this.userService.createUser(user);
    }
}


import { User } from '../models/userModel';

export function validate(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const user: User = args[0];

        if (!user.name || !user.email) {
            throw new Error('Validation Error: Name and Email are required!');
        }

        if (!user.email.includes('@')) {
            throw new Error('Validation Error: Invalid email format!');
        }

        return originalMethod.apply(this, args);
    };

    return descriptor;
}
