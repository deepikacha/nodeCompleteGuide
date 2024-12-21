import express from 'express';
import todosRoutes from './routes/todos';
import bodyParser from 'body-parser';

const app = express();

// Use body parser middleware for parsing JSON
app.use(bodyParser.json());

// Logger middleware
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

// Mount routes
app.use('/todos', todosRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
