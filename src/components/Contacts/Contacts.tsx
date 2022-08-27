import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import Contact from "./Contact/Contact"

const Contacts = (props :any) => {
    useEffect(() => {
        if (props.user) {
            props.setContacts(props.user.id)
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