import { connect } from "react-redux";
import App from './App'
const mapStateToProps = (state: any) => {
    return {
        fetching: state.fetching,
        data: state.data,
        error: state.error
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchProducts: () => dispatch({ type: "API_CALL_REQUEST" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
