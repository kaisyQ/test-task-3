import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { conctactApi } from "../../api/api"
import Contact from "./Contact/Contact"

const Contacts = (props :any) => {
    console.log(props)
    useEffect(() => {
        if (props.user) {
            conctactApi.getContacts(props.user.id).then(response => {
                props.setContacts(response.data[0].users)
            })
        }
    }, [])
    if (!props.isAuth) return <Navigate to='login' />
    return <div className="contacts">
        {
            props.contacts.map((contact: any) => <Contact key={contact.id}/>)
        }
    </div>
}

export default Contacts