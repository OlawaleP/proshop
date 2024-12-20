import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productsRoute from './routes/productRoute.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...')
});

app.use('/api/products', productsRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(port, console.log(`Server running on port ${port}`));