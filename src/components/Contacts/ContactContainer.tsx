import { connect } from "react-redux"
import Contacts from "./Contacts"
import { setContactsThnk, createContactThnk } from "../../redux/reducers/contacts-reducer"

import { getIsAuth, getUser } from "../../redux/selectors/auth-selector"
import { getContacts } from "../../redux/selectors/contacts-selector"

const mapStateToProps = (state: any) => {
    return {
        contacts: getContacts(state),
        user: getUser(state),
        isAuth: getIsAuth(state),
    }
}
const mapDispatchToProps = {
    setContacts: setContactsThnk,
    createContact: createContactThnk,
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)