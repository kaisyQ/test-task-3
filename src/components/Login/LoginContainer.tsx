import { connect } from "react-redux";
import Login from "./Login";
import { login } from "../../redux/reducers/auth-reducer";
import { setContacts } from "../../redux/reducers/contacts-reducer";

const mapStateToProps = (state: any) => {
    return {
        auth: state.auth.isAuth
    }
}
const mapDispathToProps = {
    login,
    setContacts
}

export default connect(mapStateToProps, mapDispathToProps)(Login)