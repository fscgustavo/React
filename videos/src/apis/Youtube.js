import axios from 'axios';

const KEY = 'AIzaSyBbJbzuPn0tKlydp7thPzzZUvzdyo5BgTo'
 
export default axios.get({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})