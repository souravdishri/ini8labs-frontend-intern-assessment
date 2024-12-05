import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToMongoDB, closeMongoDBConnection } from './config/database.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
connectToMongoDB();

// Routes
app.use('/api/users', userRoutes);

// Graceful Shutdown
process.on('SIGINT', () => {
    closeMongoDBConnection();
    console.log('Received SIGINT. Closing MongoDB connection.');
    process.exit(0);
});

export default app;
