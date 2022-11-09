import express from "express";
import cors from "cors"
import'dotenv/config';

import connectDB from './config/config.js';
import errorHandler from "./middleware/errorHandler.js";
import insertRecords from "./services/updateDB.js"
import router from "./routes/routes.js";

//-----------------------------------
const PORT = process.env.PORT || 5000;
const APIKEY = process.env.APIKEY;
const QUERY = process.env.QUERY || 'cricket';
const INTERVAL = 1000 * 10;

const app = express();

//-----------------------------------
connectDB();
setInterval(insertRecords, INTERVAL, APIKEY, QUERY)

app.use(cors({origin  : "*"}));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('', router);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running at PORT  ${PORT}`)
})
