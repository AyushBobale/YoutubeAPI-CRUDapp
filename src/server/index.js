import express from "express";
import cors from "cors"
import'dotenv/config';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors({origin  : "*"}));

console.log(process.env.NODE_ENV);

import connectDB from './config/config.js';
import errorHandler from "./middleware/errorHandler.js";
import searchData from './services/youtubePool.js'
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

// https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyBlVf_WuFtnGczj7yLogjApF4dFbgFYLcA&type=video&q=cricket