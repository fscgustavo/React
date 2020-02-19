import axios from 'axios'
import  _ from 'lodash'
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})