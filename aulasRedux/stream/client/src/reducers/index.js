<<<<<<< HEAD
import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import authReducer from './authReducer'

export default combineReducers({
    auth: authReducer,
    form: formReducer
})
=======
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});
>>>>>>> 1395e3e52c715c5c8f3dbcf13fae1c1a033304ff
