import express from "express";
import cors from "cors"
import'dotenv/config';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors({origin  : "*"}));

console.log(process.env.NODE_ENV);

import connectDB from './config/config.js';
import errorHandler from "./middleware/errorHandler.js";
// connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.json({"hello" : "world"})
})

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running at PORT  ${PORT}`)
})