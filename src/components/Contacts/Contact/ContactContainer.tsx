import { connect } from "react-redux"
import { deleteContactThnk, editContactThnk } from "../../../redux/reducers/contacts-reducer"
import Contact from "./Contact"

const mapStateToProps = (state: any) => {
    return {}
} 

const mapDispatchToProps = {
    deleteContact: deleteContactThnk,
    editContact: editContactThnk
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)