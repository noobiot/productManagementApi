import express, {Request, Response} from 'express';

const app = express(); // initializing the express application

app.use(express.json()); // To accept the request in JSON format.


// Test the health of the application..
app.get('/health', (_request: Request, response: Response) => { // the _ in request is to tell that the request is intentionally unused.
    response.status(200).json({
        success: true,
        data: {
            status: 'Healthy'
        }
    })
});

export default app;