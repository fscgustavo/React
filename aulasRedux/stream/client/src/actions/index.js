<<<<<<< HEAD
import { SIGN_IN, SIGN_OUT } from './types'

export const signIn = (userId) =>{
=======
import streams from '../apis/streams'
import history from '../history'
import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from './types'

export const signIn = userId =>{
>>>>>>> 1395e3e52c715c5c8f3dbcf13fae1c1a033304ff
    return{
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = (userId) =>{
    return{
<<<<<<< HEAD
        type: SIGN_OUT,
        payload: userId
=======
        type: SIGN_OUT
>>>>>>> 1395e3e52c715c5c8f3dbcf13fae1c1a033304ff
    }
}

export const createStream = (formValues) => async (dispatch, getState) => {
    const {userId} = getState().auth
    const response = await streams.post('/streams', {...formValues, userId})

    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    })

    //Do some programmatic navigation too
    //get the user back to the root route
    //.push() is the way that we can change the page of the user
    history.push('/')


}

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams')

    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    })
}

export const fetchStream = id => async dispatch => {
    const response = await streams.get(`/streams/${id}`)

    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    })
}

export const editStream = (id, formValues) => async dispatch => {
    //patch changes some values
    //put changes everything
    const response = await streams.patch(`/streams/${id}`, formValues)

    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    })
    history.push('/')
}

export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`);
  
    dispatch({ 
        type: DELETE_STREAM, 
        payload: id 
    });
    history.push('/');
  };