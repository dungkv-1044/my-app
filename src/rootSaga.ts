import { appSaga } from "./AppSaga";
import { loginSaga } from "./components/login/LoginSaga";
import { all }  from "redux-saga/effects";
export default function* rootSaga() {
    yield all([
        appSaga(),
        loginSaga()
    ])
    // code after all-effect
}
