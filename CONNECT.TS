import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import { errorMiddleware } from './middleware/errorMiddleware';
import './config/db';

const app: Application = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Error handling
app.use(errorMiddleware);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


import { Router } from 'express';
import { getUsers, createUser } from '../controllers/userController';

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);

export default router;



import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token || token !== 'mock-token') {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    next();
};
