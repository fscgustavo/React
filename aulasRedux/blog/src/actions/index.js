import jsonPlaceholder from '../apis/jsonPlaceholder'

//with async await, you have dispatch
export const fetchPosts = () =>{
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts')

        dispatch({
            type: 'FETCH_POSTS', payload: response
        })
    }
}

