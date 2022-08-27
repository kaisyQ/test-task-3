import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import Contact from "./Contact/Contact"
import './Contacts.scss'
import Modal from "./Modal/Modal"

const Contacts = (props :any) => {
    useEffect(() => {
        if (props.user) {
            props.setContacts(props.user.id)
        }
    }, [])

    const [searchVl, setSearchVl] = useState('')
    const [isShowingModal, setIsShowingModal] = useState(false)

    if (!props.isAuth) return <Navigate to='login' />

    return <div className="contacts">
        <div className="contacts__header">
            <div className="contacts__header__btns">
                <button onClick={() => {
                    setIsShowingModal(true)
                    //props.createContact('Pog', 3)
                }}>New Contact</button>
                <button>Update Contact</button>
            </div>
            <div className="contacts__header__search">
                <div className="search__img">
                    <img src="https://static.tildacdn.com/tild6132-3530-4361-b637-653830303164/searchmagnifierinter.svg" alt="search-image" />
                </div>
                <input 
                    value={searchVl} 
                    onChange={(ev) => { setSearchVl(ev.target.value) }} 
                    placeholder="Find contact by name" 
                    type="text" 
                />
            </div>
        </div>
        {
            props.contacts.map((contact: any, index: number) => <Contact key={index}/>)
        }
        { isShowingModal && <Modal  setIsShowingModal={setIsShowingModal} />}
    </div>
}

export default Contacts