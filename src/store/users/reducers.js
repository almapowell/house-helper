import {
    SIGNUP_USER_LOADING,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    GET_USER_LOADING,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
} from './constants';

const initialState = {
    loading: false,
    user: {},
}


export default function(state = initialState, action) {
    switch(action.type) {

        case GET_USER_LOADING:
            return { ...state, loading: true }
        case GET_USER_SUCCESS:
            return { ...state, user: action.payload.user, loading: false }
        case GET_USER_FAILURE:
            return { ...state, error: action.payload, loading: false }

        case SIGNUP_USER_LOADING:
            return { ...state, loading: true }
        case SIGNUP_USER_SUCCESS:
            return { ...state, user: action.payload.user, loading: false }
        case SIGNUP_USER_FAILURE:
            return { ...state, error: action.payload, loading: false }


    default:
        return state
    }
}