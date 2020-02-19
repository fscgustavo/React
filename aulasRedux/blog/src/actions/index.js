import jsonPlaceholder from '../apis/jsonPlaceholder'
import _ from 'lodash'

export const fetchPostsAndUsers = () => async (dispatch, getState) =>{
    await dispatch(fetchPosts());

    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
}



//with async await, you have dispatch
export const fetchPosts = () =>{
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts')

        dispatch({
            type: 'FETCH_POSTS', payload: response.data
        })
    }
}

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)
    
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })  
}

