import { useState } from 'react'
import './Contact.scss'

interface IContactProps {
    userName : string, 
    id: number
}

const Contact = (props: any) => {
    const [isEditing, setIsEditing] = useState(false)
    const [nameInptVl, setNameInptVl] = useState(props.userName)

    const ediiingBtnClick = (ev: any) : void => {
        if (isEditing) {
            props.editContact(nameInptVl, props.id)
            setIsEditing(false)
        } else {
            setIsEditing(true)
        }
    }

    return <div className="contact-item">
        <div className="contact-item__img">
            <img src="https://www.pngmart.com/files/21/Account-User-PNG-Photo.png" alt="avatar" />
        </div>
        <div className="contact-item__info">
            { 
                !isEditing ? <h4 className="contact-item__info__name">
                    {props.userName}
                </h4> : <input className='editing-input' onChange={(ev) => {
                    setNameInptVl(ev.target.value)
                }} 
                value={nameInptVl} type="text" />
            }
            <hr />
            <p className="contact-item__info__status">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Optio vel omnis ut sed esse impedit aliquid, in ipsum autem minus magni illo rem blanditiis, molestias obcaecati sunt? Laudantium, dignissimos culpa?</p>
        </div>
        <button onClick={() => {props.deleteContact(props.id)}} className='contact-item__btn'>X</button>
        <button onClick={ediiingBtnClick} className='contact-item__btn'>{
            !isEditing ? 'Edit' : 'Ok'
        }</button>
    </div>
}

export default Contact