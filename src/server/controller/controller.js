import asyncHandler from "express-async-handler";
import vidModel from "../models/vidData.js";
import 'dotenv/config';

const getData = asyncHandler( async(req, res, next) => {
    const PAGESIZE = process.env.PAGESIZE || 3;
    const page = parseInt(req.query.page || "0");
    const total = await vidModel.countDocuments({});
    const datas = await vidModel.find({})
        .limit(PAGESIZE)
        .skip(PAGESIZE * page);

    res.status(200).json({'total' : Math.ceil(total/PAGESIZE), data : datas});
});


export {getData};