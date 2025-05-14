import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { connectDB } from './config/db.js';
import helmet from 'helmet';

import productRoutes from './routes/product.route.js';
import cookieParser from 'cookie-parser';
import contactRoute from './routes/contact.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(cors({ origin: 'http://localhost:5173', credentials: true })); //allows to make requests from the frontend to the backend

app.use(express.json()); //allows to parse incoming requests with json payloads
app.use(cookieParser()); //allows to parse cookies from the request headers
app.use(helmet()); // Adds Helmet middleware to enhance security
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  })
);



app.use("/api/products", productRoutes);
app.use("/api/contact", contactRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
    connectDB();
  console.log('Server is running on' + PORT);
});