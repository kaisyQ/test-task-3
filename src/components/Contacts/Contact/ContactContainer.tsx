import { connect } from "react-redux"
import { deleteContactThnk } from "../../../redux/reducers/contacts-reducer"
import Contact from "./Contact"

const mapStateToProps = (state: any) => {
    return {}
} 

const mapDispatchToProps = {
    deleteContact: deleteContactThnk
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)