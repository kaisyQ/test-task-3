import { connect } from "react-redux"
import { deleteContactThnk, editContactThnk } from "../../../redux/reducers/contacts-reducer"
import { getUser } from "../../../redux/selectors/auth-selector"
import Contact from "./Contact"

const mapStateToProps = (state: any) => {
    return {
        user: getUser(state)
    }
} 

const mapDispatchToProps = {
    deleteContact: deleteContactThnk,
    editContact: editContactThnk
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)