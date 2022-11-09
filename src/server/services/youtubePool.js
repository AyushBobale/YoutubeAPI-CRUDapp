import fetch from 'node-fetch';

const searchData = async (key, query) => {
    let url = `https://www.googleapis.com/youtube/v3/search/?part=snippet&key=${key}&type=video&q=${query}}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log('----------------->' ,data['items']);
    return data;
                
}

// const data = searchData('AIzaSyBlVf_WuFtnGczj7yLogjApF4dFbgFYLcA', 'cricket')
// console.log(data);
export default searchData;