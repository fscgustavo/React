import axios from 'axios';

const KEY = 'AIzaSyBbJbzuPn0tKlydp7thPzzZUvzdyo5BgTo'
 
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})