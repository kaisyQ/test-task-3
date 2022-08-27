import { connect } from "react-redux"
import Contacts from "./Contacts"
import { setContactsThnk, createContactThnk, setFilterParams } from "../../redux/reducers/contacts-reducer"

import { getIsAuth, getUser } from "../../redux/selectors/auth-selector"
import { getContacts, getContactsToShow } from "../../redux/selectors/contacts-selector"

const mapStateToProps = (state: any) => {
    return {
        contacts: getContacts(state),
        user: getUser(state),
        isAuth: getIsAuth(state),
        contactsToShow: getContactsToShow(state)
    }
}
const mapDispatchToProps = {
    setContacts: setContactsThnk,
    createContact: createContactThnk,
    setFilterParams
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)