import { useState } from 'react'
import './Modal.scss'

const Modal = (props: any) => {
    const [name, setName] = useState('') 

    const createBtnClick = (ev: any) : void => {
        props.createContact(name, props.user.id)
        props.setIsShowingModal(false)
    }
    return <>
        <div className='modal'>
            <div className='modal__item'>
                <label htmlFor="nameInput">Enter name</label>
                <input value={name} onChange={(ev) => {setName(ev.target.value)}} id='nameInput'/>
            </div>
            <div>
                <button onClick={createBtnClick}>Create</button>
                <button onClick={() => {props.setIsShowingModal(false)}}>Close</button>
            </div>
            
        </div>
    </>
}

export default Modal