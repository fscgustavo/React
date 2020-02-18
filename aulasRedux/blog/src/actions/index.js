import jsonPlaceholder from '../apis/jsonPlaceholder'

//with async await: error: does not return a plain object
export const fetchPosts = () =>{

    const promise = jsonPlaceholder.get('/posts')

    return{
        type: 'FETCH_POSTS',
        payload: promise
    }
}