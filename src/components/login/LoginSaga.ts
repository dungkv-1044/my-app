import {takeLatest, call, put} from "redux-saga/effects";

import AxiosRequest from "../../networking/AxiosRequest";

import Config from "../../networking/Config";
import {LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS} from "./LoginActions";


// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* loginSaga() {
    yield takeLatest(LOGIN_REQUEST, workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchProduct() {
    return AxiosRequest(Config.API.Login);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    try {
        const response = yield call(fetchProduct);
        const data = response.data;
        // dispatch a success action to the store with the new dog
        yield put({type: LOGIN_SUCCESS, data});
    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({type: LOGIN_FAIL, error});
    }
}
