import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 0b092dad3b01e8bf56cf9da3a138d417dc34b0818994fbd359a3523028ba3006'
    }    


})