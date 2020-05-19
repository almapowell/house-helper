import axios from 'axios';
import {
    SIGNUP_USER,
    GET_USER,
} from './constants';


export const getUser = () => {
    return {
        type: GET_USER,
        payload: axios.get('/user/currentUser')
    }
}

export const signUp = (signupData) => {
    console.log('hit the actions', signupData)
    return {
        type: SIGNUP_USER,
        payload: axios.post('/user/signup', signupData)
    }
}