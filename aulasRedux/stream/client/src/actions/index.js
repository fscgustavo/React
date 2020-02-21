import streams from '../apis/streams'
import {SIGN_IN, SIGN_OUT} from './types'
import { connect } from 'react-redux'

export const signIn = () =>{
    return{
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () =>{
    return{
        type: SIGN_OUT
    }
}

export const createStream = (formValues) => async dispatch => {
    streams.post('/streams', formValues)
}