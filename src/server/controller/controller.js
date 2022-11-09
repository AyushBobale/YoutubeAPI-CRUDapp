import asyncHandler from "express-async-handler";
import vidModel from "../models/vidData.js";
import 'dotenv/config';

const getData = asyncHandler( async(req, res, next) => {
    const PAGESIZE = parseInt(req.query.pagesize || "3");
    const page = parseInt(req.query.page || "0");
    const sort = parseInt(req.query.sort || "1");
    const total = await vidModel.countDocuments({});
    
    const datas = await vidModel.find({})
        .sort({'publishedAt' : sort})
        .limit(PAGESIZE)
        .skip(PAGESIZE * page);

    res.status(200).json({'total' : Math.ceil(total/PAGESIZE), data : datas});
});


export {getData};