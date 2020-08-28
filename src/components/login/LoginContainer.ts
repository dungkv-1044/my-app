import { connect } from "react-redux";
import LoginScreen from "./LoginScreen";
import { LOGIN_REQUEST } from "./LoginActions";
const mapStateToProps = (state: any) => {
    return {
        fetching: state.loginReducer.fetching,
        data: state.loginReducer.data,
        error: state.loginReducer.error
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        login: () => dispatch({ type: LOGIN_REQUEST })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
