import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
dotenv.config();
import { notFound , errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js'
import path from "path"

// Set up database
connectDB();

// Set up express server
const app = express();

// Allows to send josn data through http requests
app.use(express.json());

//Allows to send data through forms
app.use(express.urlencoded({extended:true}))

//Allows to add middleware for parsing cookies
app.use(cookieParser());

// Send to user routes
app.use('/api/users', userRoutes);

// For Production
if( process.env.NODE_ENV === 'production'){
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname,'frontend/dist')));

    app.get('*' , (req , res)=> res.sendFile(path.resolve(__dirname,'frontend','dist', 'index.html')));
} else {

    app.get('/', (req, res) => res.send('Server is ready'));
}


//Setting Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});