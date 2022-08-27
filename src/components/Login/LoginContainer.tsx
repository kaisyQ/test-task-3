import { connect } from "react-redux";
import Login from "./Login";
import { loginTHnk } from "../../redux/reducers/auth-reducer";
import { getIsAuth } from "../../redux/selectors/auth-selector";

const mapStateToProps = (state: any) => {
    return {
        auth: getIsAuth(state)
    }
}
const mapDispathToProps = {
    login: loginTHnk
}

export default connect(mapStateToProps, mapDispathToProps)(Login)