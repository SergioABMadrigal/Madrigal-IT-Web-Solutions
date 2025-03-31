import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoutes from './routes/product.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); //allows to parse incoming requests with json payloads
app.use(cookieParser()); //allows to parse cookies from the request headers

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectDB();
  console.log('Server is running on http://localhost:' + PORT);
});