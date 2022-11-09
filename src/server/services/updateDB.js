import vidModel from "../models/vidData.js";
import fetch from 'node-fetch';

import'dotenv/config';
import connectDB from "../config/config.js";

const insertRecords = async (key, query) => {
    /*
    Given key and query 
    gets the first 5 search results 
    checks if the given video is already in the database
    if not inserts it

    */
    let url = `https://www.googleapis.com/youtube/v3/search/?part=snippet&key=${key}&type=video&q=${query}}`;
    let response = await fetch(url);
    let data = await response.json();

    data['items'].forEach(element => {
        let obj = {
            'videoId'       : element['id']['videoId'], 
            'publishedAt'   : new Date(element['snippet']['publishedAt']),
            'channelId'     : element['snippet']['channelId'],
            'title'         : element['snippet']['title'],
            'description'   : element['snippet']['description'],
            'channelTitle'  : element['snippet']['channelTitle'],
            'thumbnails'    : { 
                                'default'   : {
                                    'url'   : element['snippet']['thumbnails']['default']['url'],
                                    'width' : element['snippet']['thumbnails']['default']['width'],
                                    'height': element['snippet']['thumbnails']['default']['height'],
                                    },
                                'medium'    : {
                                    'url'   : element['snippet']['thumbnails']['default']['url'],
                                    'width' : element['snippet']['thumbnails']['default']['width'],
                                    'height': element['snippet']['thumbnails']['default']['height'],
                                    },
                                'high'      : {
                                    'url'   : element['snippet']['thumbnails']['default']['url'],
                                    'width' : element['snippet']['thumbnails']['default']['width'],
                                    'height': element['snippet']['thumbnails']['default']['height'],
                                    },
                                },

        }
        // console.log(obj);
        let objId = { 'videoId' : element['id']['videoId']}
        vidModel.findOne(objId, (err, data) => {
            if(!err){
                if(!data){
                    console.log('Does not exist');
                    vidModel.create(obj);
                }
            }
        });
    });

}


let main = async () => {
    await connectDB();
    await insertRecords('AIzaSyBlVf_WuFtnGczj7yLogjApF4dFbgFYLcA', 'cricket')
}

export default insertRecords;