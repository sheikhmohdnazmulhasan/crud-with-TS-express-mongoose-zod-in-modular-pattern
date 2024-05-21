import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoute } from './app/modules/product/product.route';

const app: Application = express();

// parser;
app.use(express.json());
app.use(cors());

// startup endpoint
app.get('/', (req: Request, res: Response) => {
    res.send('Yeeeye! Assignment-2 is running')
});

// application route;
app.use('/api', ProductRoute);

// invalid endpoint checker;
app.all('*', (req: Request, res: Response) => {

    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

export default app;