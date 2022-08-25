import { connect } from "react-redux"
import Contacts from "./Contacts"
import { setContacts } from "../../redux/reducers/contacts-reducer"

const mapStateToProps = (state: any) => {
    return {
        contacts: state.contacts.items,
        user: state.auth.user,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = {
    setContacts
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)