import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import './Contacts.scss'
import ModalContainer from "./Modal/ModalContainer"
import ContactContainer from "./Contact/ContactContainer"

const Contacts = (props :any) => {
    useEffect(() => {
        if (props.user) {
            props.setContacts(props.user.id)
        }
    }, [])

    const [searchVl, setSearchVl] = useState('')
    const [isShowingModal, setIsShowingModal] = useState(false)

    const searchBtnClick = (ev: any) : void => {
        props.setFilterParams(searchVl)
        setSearchVl('')
    }

    if (!props.isAuth) return <Navigate to='login' />

    return <div className="contacts">
        <div className="contacts__header">
            <div className="contacts__header__btns">
                <button onClick={() => { setIsShowingModal(true) }}>New Contact</button>
            </div>
            <div className="contacts__header__search">
                <input 
                    value={searchVl} 
                    onChange={(ev) => { setSearchVl(ev.target.value) }} 
                    placeholder="Find contact by name" 
                    type="text" 
                />
                <div className="search__img" onClick={searchBtnClick}>
                    <img src="https://static.tildacdn.com/tild6132-3530-4361-b637-653830303164/searchmagnifierinter.svg" alt="search-image" />
                </div>
            </div>
        </div>
        {
            props.contactsToShow.map((item: any) => <ContactContainer id={item.id} userName={item.contact.name} key={item.id}/>)
        }
        { isShowingModal && <ModalContainer  setIsShowingModal={setIsShowingModal} />}
    </div>
}

export default Contacts