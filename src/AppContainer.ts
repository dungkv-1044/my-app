import { connect } from "react-redux";
import App from './App'
import {API_CALL_REQUEST} from "./AppActions";
const mapStateToProps = (state: any) => {
    return {
        fetching: state.appReducer.fetching,
        data: state.appReducer.data,
        error: state.appReducer.error
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchProducts: () => dispatch({ type: API_CALL_REQUEST })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
