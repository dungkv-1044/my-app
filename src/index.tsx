import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import LoginContainer from "./components/login/LoginContainer";
import AppContainer from "./AppContainer";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import { appReducer } from "./AppReducer";

import { loginReducer } from "./components/login/LoginReducer";
import rootSaga from "./rootSaga";
import {appSaga} from "./AppSaga";
import {loginSaga} from "./components/login/LoginSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
// const reduxDevTools =
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store with our reducer above and middleware
let rootReducer = combineReducers({loginReducer, appReducer});
let store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
);

// run the saga
sagaMiddleware.run(rootSaga);


ReactDOM.render(
    <Provider store={store}>
        <LoginContainer />
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
