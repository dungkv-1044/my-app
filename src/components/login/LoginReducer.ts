import {LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS} from "./LoginActions";


const initialState = {
    fetching: false,
    data: null,
    error: null
};

export function loginReducer(state = initialState, action: any) {
    console.log("AAAA ", action)
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, fetching: true, error: null};
        case LOGIN_SUCCESS:
            return {...state, fetching: false, data: action.data};
        case LOGIN_FAIL:
            return {...state, fetching: false, data: null, error: action.error};
        default:
            return state;
    }
}
