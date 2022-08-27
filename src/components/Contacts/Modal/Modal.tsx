import { useState } from 'react'
import './Modal.scss'

const Modal = (props: any) => {
    const [name, setName] = useState('') 
    return <>
        <div className='modal'>
            <div className='modal__item'>
                <label htmlFor="nameInput">Enter name</label>
                <input value={name} onChange={(ev) => {setName(ev.target.value)}} id='nameInput'/>
            </div>
            <div>
                <button onClick={() => {props.setIsShowingModal(false)}}>Create</button>
                <button onClick={() => {props.setIsShowingModal(false)}}>Close</button>
            </div>
            
        </div>
    </>
}

export default Modal