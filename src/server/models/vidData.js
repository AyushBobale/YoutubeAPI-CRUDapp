import mongoose from "mongoose";

const thumbSchema = mongoose.Schema({
    url             : {type : String, required : true},
    width           : {type : Number, required : true},
    height          : {type : Number, required : true},
});

const thumbnailsSchema = mongoose.Schema({
    default         : {type : thumbSchema, required : true},
    medium          : {type : thumbSchema, required : true},
    high            : {type : thumbSchema, required : true},
})

const vidSchema = mongoose.Schema({
    videoId         : {type : String, required : true},
    publishedAt     : {type : Date, required : true},
    channelId       : {type : String, required : true},
    title           : {type : String, required : false},
    description     : {type : String, required : true},
    channelTitle    : {type : String, required : true},
    thumbnails      : {type : thumbnailsSchema, required : true},

}, {collection : 'MedbikriAssesment'});
vidSchema.index({publishedAt : -1})
vidSchema.index({videoId : 1})

const vidModel = mongoose.model('VideoData', vidSchema);


export default vidModel;