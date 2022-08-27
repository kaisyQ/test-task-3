import { connect } from "react-redux"
import { createContactThnk } from "../../../redux/reducers/contacts-reducer"
import { getUser } from "../../../redux/selectors/auth-selector"
import Modal from "./Modal"
const mapStateToProps = (state: any) => {
    return {
        user: getUser(state)
    }
}
const mapDispatchToProps = {
    createContact: createContactThnk

}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)